export const isMobile = (): boolean => {
    return typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);
};
