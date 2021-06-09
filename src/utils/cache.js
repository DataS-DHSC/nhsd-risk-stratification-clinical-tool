/**
 * Create a new cache function.  Returns a new function that memoises the fetchUpstream function
 * @param getCurrentTime {function} - returns current time as a Date object
 * @param fetch {function} - a function used to fetch a value
 */
const newCache = (getCurrentTime, fetch) => {
  const state = [];

  async function getCachedAsync(key) {
    let flatKey = key;
    if (typeof key !== 'string') {
      // eslint-disable-next-line no-param-reassign
      flatKey = JSON.stringify(key);
    }
    const currentTime = getCurrentTime();
    const holder = state[flatKey];
    if (
      holder &&
      state.cacheTime &&
      currentTime - holder.timestamp < state.cacheTime
    ) {
      return holder.value;
    }

    // value not cached or expired, so fetch a new value from upstream
    const result = await fetch(key);

    if (result.cacheTime) {
      state.cacheTime = result.cacheTime;
    }

    state[flatKey] = {
      value: result.value,
      timestamp: currentTime,
    };
    return result.value;
  }

  return getCachedAsync;
};

module.exports = { newCache };
