import updateStoreFromPostData from '../../utils/updateStoreFromPostData';

describe('updateStoreFromPostData', () => {
  it('do not set any data if postData is empty', async () => {
    const postData = {};
    const setDataField = jest.fn();

    await updateStoreFromPostData({
      postData,
      setDataField,
    });
    expect(setDataField).not.toHaveBeenCalled();
  });

  it('Set data when key available', async () => {
    const postData = {
      postcode: '123',
      sex: 'male',
      nhsNumber: '12345',
    };
    const setDataField = jest.fn();

    await updateStoreFromPostData({
      postData,
      setDataField,
    });

    expect(setDataField.mock.calls).toEqual([
      ['postcode', '123'],
      ['sex', 'male'],
      ['nhsNumber', '12345'],
    ]);
  });
});
