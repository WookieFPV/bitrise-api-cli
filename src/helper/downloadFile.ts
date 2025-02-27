import { createWriteStream } from "node:fs";
import type { IncomingMessage } from "node:http";
import { get } from "node:https";
import { pipeline } from "node:stream/promises";
import { URL } from "node:url";
import { formatTime } from "@/helper/formatTime";

export const downloadFile = async (fileUrl: string, outputLocationPath: string) => {
    const startTime = Date.now();
    const url = new URL(fileUrl);
    const response = await new Promise<IncomingMessage>((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to get '${fileUrl}' (${res.statusCode})`));
            } else {
                resolve(res);
            }
        }).on("error", reject);
    });
    await pipeline(response, createWriteStream(outputLocationPath));

    return { file: outputLocationPath, duration: formatTime(Date.now() - startTime) };
};
