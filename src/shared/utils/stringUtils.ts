export const trimToLength = (value: string, length: number) => {
    return value.length <= length ? value : value.substring(0, length - 3) + "...";
};
