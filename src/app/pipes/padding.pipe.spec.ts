import { PaddingPipe } from './padding.pipe';

describe('PaddingPipe', () => {
  let pipe: PaddingPipe;

  beforeAll(() => {
    pipe = new PaddingPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display "04" when value is 4, length is 2 and char is "0"', () => {
    expect(pipe.transform(4, 2, '0')).toBe('04');
  });

  it('should not pad value if not length is succifient', () => {
    expect(pipe.transform('Ab', 1)).toBe('Ab');
  });

  it('should pad with spaces by default', () => {
    expect(pipe.transform('X', 3)).toBe('  X');
  });

  it('should default to no padding when no length is passed', () => {
    expect(pipe.transform('123')).toBe('123');
  });

});
