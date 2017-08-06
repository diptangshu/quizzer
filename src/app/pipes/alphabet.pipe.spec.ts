import { AlphabetPipe } from './alphabet.pipe';

describe('AlphabetPipe', () => {
  it('create an instance', () => {
    const pipe = new AlphabetPipe();
    expect(pipe).toBeTruthy();
  });

  it('should make index 0 when the passed index is < 0', () => {
    const pipe = new AlphabetPipe();
    expect(pipe.transform(-2, 'a')).toBe('a');
  });

});
