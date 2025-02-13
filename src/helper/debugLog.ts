export const debugLog = (label: string, data: unknown) =>
    console.log(`${label}: ${JSON.stringify(data, undefined, 2)}`);
