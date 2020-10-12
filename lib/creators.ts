/**
 * Creates an iterable with a given range of numbers
 * @param start Number to start from
 * @param end Number to end with
 */
export function* range (start: number, end: number, step: number = 1) {
	for (let i = start; i <= end; i += step) yield i;
}
