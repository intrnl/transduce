/**
 * Performs a side effect for every item
 * @param callback Function that gets executed on every single item
 */
export function tap<T> (callback: (value: T, index: number) => void) {
	return function* (iterator: Iterable<T>) {
		let index = 0;

		for (let item of iterator) {
			callback(item, index++);
			yield item;
		}
	}
}
