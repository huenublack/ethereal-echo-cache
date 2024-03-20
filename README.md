# ethereal-echo-cache

[![npm version](https://badge.fury.io/js/ethereal-echo-cache.svg)](https://badge.fury.io/js/ethereal-echo-cache)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`ethereal-echo-cache` is a lightweight caching library for Node.js, designed to provide efficient in-memory caching with the option to set expiration times for cached items. It is built on top of the popular LRU (Least Recently Used) cache library.

## Installation

Install `ethereal-echo-cache` via npm:

```
npm install ethereal-echo-cache
```

## Usage

```javascript
const EtherealEchoCache = require('ethereal-echo-cache');

// Create a new cache instance
const cache = new EtherealEchoCache();

// Set a value in the cache with optional expiration time
cache.set('key', 'value', 10000); // 'key' will expire in 10 seconds

// Retrieve a value from the cache
const value = cache.get('key'); // Returns 'value' if 'key' is present

// Delete a key from the cache
cache.del('key');

// Clear the entire cache
cache.clear();
```

## API

### Constructor

```javascript
new EtherealEchoCache([options])
```

Creates a new instance of `EtherealEchoCache`.

#### Parameters:

- `options` (Object): Optional configuration options for the cache (See [LRU options](https://github.com/isaacs/node-lru-cache#options))

### Methods

#### `set(key, value, [maxAge])`

Sets a value in the cache.

- `key` (String): The key under which to store the value.
- `value` (Any): The value to store in the cache.
- `maxAge` (Number): Optional. The maximum age of the cached item in milliseconds.

#### `get(key)`

Retrieves a value from the cache.

- `key` (String): The key of the value to retrieve.

Returns the cached value if present, otherwise `undefined`.

#### `del(key)`

Deletes a key from the cache.

- `key` (String): The key to delete.

#### `clear()`

Clears the entire cache, removing all key-value pairs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
