import type { WithRequired } from "@/helper/typeHelper";

// biome-ignore lint/suspicious/noExplicitAny: unknown can't be used here instead of any (we don't care/know the type of the input)
export const ensureMandatoryFields = <T extends Record<string, any>, K extends keyof T>(
    input: T,
    mandatory: K[],
): WithRequired<T, K> => {
    for (const field of mandatory) {
        if (!input[field]) throw new Error(`Missing mandatory field: ${String(field)}`);
    }
    return input as WithRequired<T, K>;
};
