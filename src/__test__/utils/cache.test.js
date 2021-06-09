import { newCache } from '../../utils/cache';

describe('cache', () => {
  it('stores a value', async () => {
    let callCount = 0;
    let currentTime = 100;
    const getCurrentTime = () => currentTime;
    const getValue = async () => {
      callCount += 1;
      return {
        value: 'test value',
        cacheTime: 200,
      };
    };

    const cache = newCache(getCurrentTime, getValue);

    const result1 = await cache('testKey');
    expect(result1).toEqual('test value');
    expect(callCount).toEqual(1);

    const result2 = await cache('testKey');
    expect(result2).toEqual('test value');
    expect(callCount).toEqual(1);

    // fast forward the clock
    currentTime = 500;
    const result3 = await cache('testKey');
    expect(result3).toEqual('test value');
    expect(callCount).toEqual(2);
  });

  it('use an object as a key', async () => {
    let callCount = 0;
    const currentTime = 100;
    const getCurrentTime = () => currentTime;
    const getValue = async () => {
      callCount += 1;
      return {
        value: 'test value',
        cacheTime: 200,
      };
    };
    const cache = newCache(getCurrentTime, getValue);

    const result1 = await cache({ a: 1, b: 2 });
    expect(result1).toEqual('test value');
    expect(callCount).toEqual(1);
  });
});
