import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

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
    dts({
      include: ["src"],
      exclude: [
        "src/**/*.test.ts",
        "src/**/*.test.tsx",
        "src/**/*.tests.ts",
        "src/**/*.tests.tsx",
        "src/**/*.stories.tsx",
      ],
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      entry: {
        athena: path.resolve(__dirname, "src/main.ts"),
        avatar: path.resolve(__dirname, "src/components/ui/Avatar/Avatar.tsx"),
        badge: path.resolve(__dirname, "src/components/ui/Badge/Badge.tsx"),
        button: path.resolve(__dirname, "src/components/ui/Button/Button.tsx"),
        "button-select": path.resolve(
          __dirname,
          "src/components/ui/ButtonSelect/ButtonSelect.tsx",
        ),
        checkbox: path.resolve(__dirname, "src/components/ui/Checkbox/Checkbox.tsx"),
        "info-message": path.resolve(
          __dirname,
          "src/components/ui/InfoMessage/InfoMessage.tsx",
        ),
        input: path.resolve(__dirname, "src/components/ui/Input/Input.tsx"),
        modal: path.resolve(__dirname, "src/components/ui/Modal/Modal.tsx"),
        pagination: path.resolve(
          __dirname,
          "src/components/ui/Pagination/Pagination.tsx",
        ),
        "progress-bar": path.resolve(
          __dirname,
          "src/components/ui/ProgressBar/ProgressBar.tsx",
        ),
        "radio-group": path.resolve(
          __dirname,
          "src/components/ui/RadioGroup/RadioGroup.tsx",
        ),
        "radio-group-item": path.resolve(
          __dirname,
          "src/components/ui/RadioGroup/RadioGroupItem/RadioGroupItem.tsx",
        ),
        section: path.resolve(__dirname, "src/components/ui/Section/Section.tsx"),
        "action-list": path.resolve(
          __dirname,
          "src/components/ui/Select/ActionList/ActionList.tsx",
        ),
        select: path.resolve(__dirname, "src/components/ui/Select/Select.tsx"),
        switch: path.resolve(__dirname, "src/components/ui/Switch/Switch.tsx"),
        table: path.resolve(__dirname, "src/components/ui/Table/Table.tsx"),
        tabs: path.resolve(__dirname, "src/components/ui/Tabs/Tabs.tsx"),
        textarea: path.resolve(__dirname, "src/components/ui/TextArea/TextArea.tsx"),
        tooltip: path.resolve(__dirname, "src/components/ui/Tooltip/Tooltip.tsx"),
        styles: path.resolve(__dirname, "src/styles.css"),
        theme: path.resolve(__dirname, "src/theme.css"),
      },
      formats: ["es"],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "tailwindcss",
        "tailwind-merge",
        "react-dom",
        "@tailwindcss/vite",
      ],
    },
  },
});
