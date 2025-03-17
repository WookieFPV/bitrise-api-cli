import type { ResponseContext } from "../generated_api/runtime.js";

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export const isFetchError = (e: unknown): e is ResponseContext => {
    if (typeof e !== "object" || !e) return false;
    return (
        "response" in e &&
        typeof e.response === "object" &&
        !!e.response &&
        "status" in e.response &&
        "statusText" in e.response
    );
};
