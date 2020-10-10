/**
 * Finalize iterable into an array
 * @param iterable Iterable to use
 */
export function toArray<T> (iterable: Iterable<T>): T[] {
  return [...iterable];
}

/**
 * Finalize iterable into a Set
 * @param iterable Iterable to use
 */
export function toSet<T> (iterable: Iterable<T>): Set<T> {
  return new Set(iterable);
}

/**
 * Finalize iterable into a Map
 * @param iterable Iterable to use
 */
export function toMap<K, V> (iterable: Iterable<[K, V]>): Map<K, V> {
	return new Map(iterable);
}

/**
 * Finalize iterable by reducing them into a single value
 * @param accumulate Function that gets executed on every single item
 * @param initialValue The initial accumulation value, similarly to Array#reduce,
 * if left undefined it will use the first item in iterable as initial value
 */
export function reduce<T> (accumulate: ((prev: T, curr: T) => T), initialValue: T) {
	return function (iterable: Iterable<T>) {
		let initial = false;
		let value = initialValue;

		for (let item of iterable) {
			if (!initial) {
				initial = true;

				// if initialValue is not given then use the first item as one
				if (initialValue === undefined) {
					value = item;
					continue;
				}
			}

			value = accumulate(value, item);
		}

		return value;
	}
}
