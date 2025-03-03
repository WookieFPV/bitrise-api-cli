import { describe, expect, it } from "bun:test";
import { formatBytes } from "../formatBytes";

describe("formatBytes", () => {
    it("should format 0 bytes correctly", () => {
        expect(formatBytes(0)).toBe("0 Bytes");
    });

    it("should format bytes correctly", () => {
        expect(formatBytes(1024)).toBe("1 KB");
        expect(formatBytes(1024 * 1024)).toBe("1 MB");
        expect(formatBytes(1024 * 1024 * 1024)).toBe("1 GB");
    });

    it("should format bytes with decimals correctly", () => {
        expect(formatBytes(1234)).toBe("1.21 KB");
        expect(formatBytes(1234567)).toBe("1.18 MB");
    });
});
