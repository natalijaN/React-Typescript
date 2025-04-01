
export function* numberGenerator(limit: number) {
    for (let i = 1; i <= limit; i++) {
        yield i;
    }
}