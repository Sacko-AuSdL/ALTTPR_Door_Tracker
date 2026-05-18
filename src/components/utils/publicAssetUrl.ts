export function getPublicAssetUrl(path: string | undefined): string | undefined {
    if (!path) {
        return undefined;
    }

    if (
        path.startsWith("http://") ||
        path.startsWith("https://") ||
        path.startsWith("data:") ||
        path.startsWith("blob:")
    ) {
        return path;
    }

    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}