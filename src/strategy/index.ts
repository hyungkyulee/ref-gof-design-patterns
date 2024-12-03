import GaussSumStrategy from "./GaussSumStrategy";
import LoopSumStrategy from "./LoopSumStrategy";
import SumPrinter from "./SumPrinter";

const printer = new SumPrinter();
printer.print(new LoopSumStrategy(), 100);
printer.print(new GaussSumStrategy(), 100);