/**
 * Takes an item and projects it into a different value
 * @param project Function that gets executed on every single item
 */
export function map<T, V> (project: ((item: T, index: number) => V)) {
  return function* (iterable: Iterable<T>) {
    let index = 0;

    for (let item of iterable) yield project(item, index++) as V;
  }
}
