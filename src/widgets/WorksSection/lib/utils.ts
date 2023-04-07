export const idToString = (id: number) => {
    if (id + 1 < 10)
        return "0" + String(id + 1);
    else
        return String(id + 1);
}