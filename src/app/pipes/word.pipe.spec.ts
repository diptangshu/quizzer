import { WordPipe } from './word.pipe';

describe('WordPipe', () => {
  let pipe: WordPipe;

  beforeEach(() => {
    pipe = new WordPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if number is less than 0', () => {
    expect(pipe.transform(-1)).toBe('');
  });

  it('should return empty string if number is greater than allowed maximum', () => {
    expect(pipe.transform(pipe.words.length+1)).toBe('');
  });

  it('should return empty string if 0', () => {
    expect(pipe.transform(0)).toBe('');
  });

  it('should tranform number 5 to string "five"', () => {
    expect(pipe.transform(5)).toBe('five');
  });
});
