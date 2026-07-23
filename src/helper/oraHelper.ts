import type { PromiseOptions } from "ora";
import { formatTime } from "@/helper/formatTime";
import { isFetchError } from "@/helper/typeHelper";

export const getOraTexts = (label: string): PromiseOptions<unknown> => ({
    text: label,
    failText: (error: unknown) => {
        if (isFetchError(error))
            return `${label} failed with HTTP Error ${error.response.status} ${error.response.statusText}`;
        return `${label} failed with error: ${error instanceof Error ? error.message : String(error)}`;
    },
    successText: (data: { duration?: number } | unknown) => {
        if (data && typeof data === "object" && "duration" in data && typeof data.duration === "number") {
            return `${label} [took ${formatTime(data.duration)}]`;
        }
        return label;
    },
});
