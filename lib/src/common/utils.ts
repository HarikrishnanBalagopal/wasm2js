export const safeJSONstringify = (x: unknown) => JSON.stringify(x, (_, value) =>
    typeof value === 'bigint'
        ? value.toString()
        : value // return everything else unchanged
);
