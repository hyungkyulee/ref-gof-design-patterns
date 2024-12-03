import SumStrategy from "./SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, N: number) {
    console.log(`Sum of 1 to ${N} is ${strategy.get(N)}`);
  }
}