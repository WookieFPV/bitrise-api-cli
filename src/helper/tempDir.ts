import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

export const createTempDir = async (prefix: string): Promise<string> => {
    const tmpDir = path.join(tmpdir(), `${prefix}-${Date.now()}`);
    await fs.mkdir(tmpDir, { recursive: true });
    return tmpDir;
};
