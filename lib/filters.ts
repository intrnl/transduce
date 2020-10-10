/**
 * Takes only the items that are matched by a given predicate
 * @param predicate Function that gets executed on every single item
 */
export function filter<T> (predicate: ((item: T, index: number) => boolean)) {
  return function* (iterable: Iterable<T>) {
    let index = 0;

    for (let item of iterable) {
      if (predicate(item, index++)) yield item;
    }
  }
}

/**
 * Takes the first few items
 * @param count How many items to take
 */
export function first (count: number) {
  return function* (iterable: Iterable<any>) {
    let index = 0;

    for (let item of iterable) {
			if (++index > count) return;
			yield item;
    }
  }
}

/**
 * Takes the last few items
 * @param count How many items to take
 */
export function last (count: number) {
  return function* (iterable: Iterable<any>) {
		// There's no way to take the items from the end without dumping all of them
		// to a placeholder array.
    let holdover = [...iterable];

    for (let i = holdover.length - count; i < holdover.length; i++) {
      yield holdover[i];
    }
  }
}

/**
 * Skips the first few items
 * @param count How many items to skip
 */
export function skip (count: number) {
  return function* (iterable: Iterable<any>) {
    let index = 0;

 		for (let item of iterable) {
      if (++index > count) yield item;
    }
  }
}

/**
 * Takes only the items that are unique from each other
 * @param selector Value to select for uniqueness checking
 */
export function unique<T, V> (selector?: ((value: T) => V)) {
  return function* (iterable: Iterable<T>) {
    let set = new Set;

    for (let item of iterable) {
      let id = selector ? selector(item) : item;

      if (!set.has(id)) {
        set.add(id);
        yield item;
      }
    }
  }
}

/**
 * Takes a slice of items
 * @param start Zero-based index to start extraction
 * @param end Zero-based index before which to end extraction
 */
export function slice (start: number, end: number) {
	return function* (iterable: Iterable<any>) {
		let index = 0;

		for (let item of iterable) {
			if (index >= start && index < end) yield item;
			if (++index >= end) return;
		}
	}
}
