import { reverse } from "../src/reverse";

describe('reverse', () => {
  it('should return "olleh" when inpt is "hello"', () => {
    expect(reverse('hello')).toBe('olleh');
  })
})