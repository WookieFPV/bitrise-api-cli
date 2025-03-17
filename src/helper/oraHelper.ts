import { formatTime } from "@/helper/formatTime";
import { isFetchError } from "@/helper/typeHelper";

export const getOraTexts = (label: string) => ({
    text: label,
    failText: (error: Error) => {
        if (isFetchError(error))
            return `${label} failed with HTTP Error ${error.response.status} ${error.response.statusText}`;
        return `${label} failed with error: ${error.message}`;
    },
    successText: (data: { duration?: number } | unknown) => {
        if (data && typeof data === "object" && "duration" in data && typeof data.duration === "number") {
            return `${label} [took ${formatTime(data.duration)}]`;
        }
        return label;
    },
});
