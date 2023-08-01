function sumArray(array) {
  let sum = 0;
  array.forEach(number => {
    sum += number;
  });
  return sum;
}

const numbers = [35,36,37,38];
const result = sumArray(numbers);
console.log("Result",result); 