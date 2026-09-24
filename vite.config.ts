import { readFileSync } from "node:fs";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

const pkg = JSON.parse(
  readFileSync(path.resolve(__dirname, "package.json"), "utf-8"),
) as {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

// Runtime and peer dependencies are installed by the consuming app, so they
// are never bundled into dist.
const externalPackages = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];

const isExternal = (id: string) =>
  externalPackages.some((name) => id === name || id.startsWith(`${name}/`));

// Library-only plugins must not run when Storybook reuses this config.
const isLibraryBuild: Plugin["apply"] = (config, { command }) =>
  command === "build" && !!config.build?.lib;

const SOURCE_DIRECTIVE = '@source "../src/**/*.{ts,tsx}";';

// Ships src/index.css unprocessed as dist/athena.css, so the consuming app's
// Tailwind generates the utilities. It scans the built bundle instead of src.
const athenaCss = (): Plugin => ({
  name: "athena-css",
  apply: isLibraryBuild,
  generateBundle() {
    const css = readFileSync(path.resolve(__dirname, "src/index.css"), "utf-8");

    if (!css.includes(SOURCE_DIRECTIVE)) {
      throw new Error(`src/index.css must contain ${SOURCE_DIRECTIVE}`);
    }

    this.emitFile({
      type: "asset",
      fileName: "athena.css",
      source: css.replace(SOURCE_DIRECTIVE, '@source "./athena.js";'),
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
    {
      ...dts({
        include: ["src"],
        tsconfigPath: "./tsconfig.app.json",
        rollupTypes: true,
      }),
      apply: isLibraryBuild,
    },
    athenaCss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: isExternal,
    },
  },
});
