export function reverse(input: string): string {
  const reversed = input.split('').reverse().join('');
  console.log(reversed);
  return reversed;
}