const decimals = 0;

/**
 * copied from: https://gist.github.com/zentala/1e6f72438796d74531803cc3833c039c
 */
export const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals || 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    const formattedSize = Number.parseFloat((bytes / k ** i).toFixed(dm));
    return `${formattedSize} ${sizes[i]}`;
};
