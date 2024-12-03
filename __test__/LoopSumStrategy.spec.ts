import LoopSumStrategy from "../src/strategy/LoopSumStrategy";

describe('LoopSumStrategy', () => {
  let strategy;
  beforeEach(() => {
    strategy = new LoopSumStrategy();
  })

  it('should return 5050 when N is 100', () => {
    const strategy = new LoopSumStrategy();
    expect(strategy.get(100)).toBe(5050);
  });
});
