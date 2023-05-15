type Fn = (...params: any[]) => any;

function memoize(fn: Fn): Fn {
  const cache: Record<string, any> = {};

  return function (...args: any[]) {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a: number, b: number) {
  callCount += 1;
  return a + b;
});


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
