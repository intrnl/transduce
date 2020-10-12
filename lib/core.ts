/**
 * Pipes a value from one function to the next
 * @param fns Array of functions
 */
export function pipe (fns: ((value: any) => any)[]): ((value: any) => unknown) {
	return fns.reduce((prev, next) => (value) => next(prev(value)));
}
