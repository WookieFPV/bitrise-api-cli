import { formatTime } from "@/helper/formatTime";

export const getOraTexts = (label: string) => ({
    text: label,
    failText: (error: Error) => `${label} failed with error: ${error.message}`,
    successText: (data: { duration?: number } | unknown) => {
        if (data && typeof data === "object" && "duration" in data && typeof data.duration === "number") {
            return `${label} [took ${formatTime(data.duration)}]`;
        }
        return label;
    },
});
