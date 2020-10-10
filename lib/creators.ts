/**
 * Creates an iterable with a given range of numbers
 * @param start Number to start from
 * @param end Number to end with
 */
export function* range (start: number, end: number) {
	for (let i = start; i <= end; i++) yield i;
}
