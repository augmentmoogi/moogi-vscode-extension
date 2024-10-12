import * as path from 'path';
import {
  downloadAndUnzipVSCode,
  runTests
} from '@vscode/test-electron';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname);
    // const extensionTestsPath = path.resolve(__dirname, './jest-e2e-runner.js');
    const extensionTestsPath = path.resolve(__dirname, './out/test/suite/jest-runner.js');
    const vscodeExecutablePath = await downloadAndUnzipVSCode('insiders');


    // Run the extension test
    await runTests({
      // Use the specified `code` executable
      vscodeExecutablePath,
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: ['--disable-extensions'],
    });
  } catch (err) {
    console.error(err);
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();