type F = () => Promise<any>;

const promisePool = async (functions: F[], n: number): Promise<void> => {
  let i = 0;

  // Execute current function and call next function
  const next = async (): Promise<void> => {
    const fn = functions[i++];
    if (fn) {
      await fn();
      return next();
    }
  };

  // Execute n functions at once
  await Promise.all(Array(n).fill(undefined).map(next));
};

// Usage example
const sleep = (t: number): Promise<void> => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1)
  .then(() => console.log('After 900ms'));


/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
