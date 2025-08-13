import { describe, expect, it } from "bun:test";
import { ensureMandatoryFields } from "../ensureMandatoryFields";

describe("ensureMandatoryFields", () => {
    it("should return the input if all mandatory fields are present", () => {
        const input = { a: 1, b: 2 };
        const result = ensureMandatoryFields(input, ["a", "b"]);
        expect(result).toEqual(input);
    });

    it("should return the correct type (more strict)", () => {
        type loose = { a: number; b?: number };
        type withRequiredB = { a: number; b: number };
        const input: loose = { a: 1, b: 2 };
        const result = ensureMandatoryFields(input, ["b"]);

        // @ts-expect-error
        expect(result).toEqual(input);

        // expect result to have a stricter type
        const _expectCorrectType: withRequiredB = result;

        // expect result.b to be a number:
        const shouldBeNumber: number = result.b;
        expect(shouldBeNumber).toBeTruthy();
    });

    it("should throw an error if a mandatory field is missing", () => {
        const input = { a: 1 };
        // @ts-expect-error
        expect(() => ensureMandatoryFields(input, ["b"])).toThrow("Missing mandatory field: b");
    });

    it("should only allow valid fields", () => {
        const input = { a: 1 };
        // @ts-expect-error
        expect(() => ensureMandatoryFields(input, ["c"])).toThrow("Missing mandatory field: c");
    });
});
