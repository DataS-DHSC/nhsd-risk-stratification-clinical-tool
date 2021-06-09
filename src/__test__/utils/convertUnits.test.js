import ConvertUnits from '../../utils/convertUnits';

describe('convertUnits', () => {
  it('returns response', async () => {
    const conversion = ConvertUnits(80, 'kg-to-st-lb', 2);
    expect(conversion.label).toEqual('12st 8.37lb');
    expect(conversion.ariaLabel).toEqual('12 stone 8.37 pounds');
  });

  it('returns response', async () => {
    const conversion = ConvertUnits(80, 'kg-to-st-lb', 0);
    expect(conversion.label).toEqual('12st 8lb');
    expect(conversion.ariaLabel).toEqual('12 stone 8 pounds');
  });

  it('returns response', async () => {
    const conversion = ConvertUnits(0, 'kg-to-st-lb', 0);
    expect(conversion.label).toEqual('0st 0lb');
    expect(conversion.ariaLabel).toEqual('0 stone 0 pounds');
  });

  it('returns response', async () => {
    const conversion = ConvertUnits(0, 'cm-to-ft-in', 0);
    expect(conversion.label).toEqual('0ft 0in');
    expect(conversion.ariaLabel).toEqual('0 feet 0 inches');
  });

  it('returns response', async () => {
    const conversion = ConvertUnits(185, 'cm-to-ft-in', 0);
    expect(conversion.label).toEqual('6ft 1in');
    expect(conversion.ariaLabel).toEqual('6 feet 1 inches');
  });

  it('returns response', async () => {
    const conversion = ConvertUnits(188, 'cm-to-ft-in', 0);
    expect(conversion.label).toEqual('6ft 2in');
    expect(conversion.ariaLabel).toEqual('6 feet 2 inches');
  });
});
