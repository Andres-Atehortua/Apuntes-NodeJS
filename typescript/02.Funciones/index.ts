//FUNCIONES

function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 3);

function mathOperation(cb: Function, a: number, b: number): number {
  return cb(a, b);
}

const result: number = mathOperation(
  (num1: number, num2: number): number => num1 + num2,
  5,
  5
);

console.log(result);
