import { describe, expect, it } from "bun:test";
import { formatTime } from "../formatTime";

describe("formatTime", () => {
    it("should format time less than 1 second in milliseconds", () => {
        expect(formatTime(999)).toBe("999ms");
        expect(formatTime(1)).toBe("1ms");
        expect(formatTime(0)).toBe("0ms");
    });

    it("should format time equal to or greater than 1 second in seconds", () => {
        expect(formatTime(1000)).toBe("1.0s");
        expect(formatTime(1500)).toBe("1.5s");
        expect(formatTime(2000)).toBe("2.0s");
    });

    it("should handle edge cases", () => {
        expect(formatTime(-1)).toBe("-1ms");
        expect(formatTime(Number.MAX_SAFE_INTEGER)).toBe(`${(Number.MAX_SAFE_INTEGER / 1000).toFixed(1)}s`);
    });
});
