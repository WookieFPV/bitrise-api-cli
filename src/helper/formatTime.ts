/**
 * formats time in 0.1s precision
 */
export const formatTime = (timeMs: number): string => `${(timeMs / 1000).toFixed(1)}s`;
