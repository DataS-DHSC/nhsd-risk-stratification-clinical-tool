import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../utils/hooks';

// Mock fetch function to prevent http calls during test
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        'release-version': '1.0.0',
        'deploy-date': '2020-11-19 12:00:00',
      }),
  })
);

// test cases
describe('hooks', () => {
  it('should set state with response from fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({ url: 'testURL' })
    );
    await waitForNextUpdate();
    expect(result.current).toEqual([
      {
        'release-version': '1.0.0',
        'deploy-date': '2020-11-19 12:00:00',
      },
      false,
    ]);
  });
});
