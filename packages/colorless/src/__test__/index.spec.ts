import Colorless from '../index'

describe('class Colorless()', () => {
  it('should parse value correctly', () => {
    const instance = new Colorless('ffffff')

    expect(instance.toRGB()).toEqual([255, 255, 255])

    instance.color = [0, 0,0]
    
    expect(instance.toHEX()).toEqual('000000')
  });

  it('should failed to parse', () => {
    const instance = new Colorless()
    
  });
});
