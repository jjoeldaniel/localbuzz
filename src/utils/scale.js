export function scaleX(px) {
    return `${(px / 1920 * 100).toFixed(2)}%`;
}
export function scaleY(px) {
    return `${(px / 1080 * 100).toFixed(2)}%`;
}
