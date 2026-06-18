import { readFile, writeFile } from "node:fs/promises";

const packageJsonPath = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
const runNumber = process.env.GITHUB_RUN_NUMBER;
const runAttempt = process.env.GITHUB_RUN_ATTEMPT ?? "1";

if (!runNumber) {
  throw new Error("GITHUB_RUN_NUMBER is required to create a release version.");
}

packageJson.version = `0.0.0-main.${runNumber}.${runAttempt}`;

await writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
console.log(`Prepared ${packageJson.name}@${packageJson.version}`);
