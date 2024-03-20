const LRU = require('lru-cache');

class EtherealEchoCache {
  constructor(options = {}) {
    this.cache = new LRU(options);
  }

  set(key, value, maxAge) {
    this.cache.set(key, value, maxAge);
  }

  get(key) {
    return this.cache.get(key);
  }

  del(key) {
    this.cache.del(key);
  }

  clear() {
    this.cache.reset();
  }
}

module.exports = EtherealEchoCache;
