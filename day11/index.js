class Monkey {
  constructor(items, operation, divisor, receiver1, receiver2) {
    this.items = items;
    this.operation = operation;
    this.divisor = divisor;
    this.receiver1 = receiver1;
    this.receiver2 = receiver2;
    this.numberItemsInspected = 0;
  }

  test(n) {
    return n % this.divisor === 0;
  }
}

const add = (n) => {
  return (x) => x + n;
};

const mult = (n) => {
  return (x) => x * n;
};

const sqr = () => {
  return (x) => x * x;
};

const monkeys = [
  new Monkey([84, 72, 58, 51], mult(3), 13, 1, 7),
  new Monkey([88, 58, 58], add(8), 2, 7, 5),
  new Monkey([93, 82, 71, 77, 83, 53, 71, 89], sqr(), 7, 3, 4),
  new Monkey([81, 68, 65, 81, 73, 77, 96], add(2), 17, 4, 6),
  new Monkey([75, 80, 50, 73, 88], add(3), 5, 6, 0),
  new Monkey([59, 72, 99, 87, 91, 81], mult(17), 11, 2, 3),
  new Monkey([86, 69], add(6), 3, 1, 0),
  new Monkey([91], add(1), 19, 2, 5),
];

const countNumberOfItemsInspected = (rounds, divisor) => {
  const commonDivisor = monkeys.reduce((acc, curr) => acc * curr.divisor, 1);
  for (let i = 0; i < rounds; i++) {
    monkeys.forEach((monkey) => {
      while (monkey.items.length != 0) {
        const worryLevel = Math.floor(
          (monkey.operation(monkey.items.shift()) / divisor) % commonDivisor
        );
        monkey.numberItemsInspected++;
        if (monkey.test(worryLevel)) {
          monkeys[monkey.receiver1].items.push(worryLevel);
        } else {
          monkeys[monkey.receiver2].items.push(worryLevel);
        }
      }
    });
  }
  return monkeys.map((monkey) => monkey.numberItemsInspected);
};

const getSolutionPart1 = () => {
  const numberOfItemsInspected = countNumberOfItemsInspected(20, 3).sort((a, b) => b - a);
  return numberOfItemsInspected[0]*numberOfItemsInspected[1];
};

const getSolutionPart2 = () => {
  const numberOfItemsInspected = countNumberOfItemsInspected(10000, 1).sort((a, b) => b - a);
  return numberOfItemsInspected[0]*numberOfItemsInspected[1];
};

console.log("Javascript");
const part = process.env.part || "part1";

if (part === "part1") console.log(getSolutionPart1());
else console.log(getSolutionPart2());