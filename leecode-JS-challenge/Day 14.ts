class TimeLimitedCache {
  private cache: Map<number, { value: number; ref: NodeJS.Timeout }>;

  constructor() {
    this.cache = new Map<number, { value: number; ref: NodeJS.Timeout }>();
  }

  set(key: number, value: number, duration: number): boolean {
    const found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key)!.ref); // Cancel previous timeout
    this.cache.set(key, {
      value,
      ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key)!.value : -1;
  }

  count(): number {
    return this.cache.size;
  }
}

// Usage example
const obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)); // 42
console.log(obj.count()); // 1
