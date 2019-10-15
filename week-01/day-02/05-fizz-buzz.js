
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i = 1; i <= 100; i += 1) {
  let toPrint = '';
  if (i % 3 === 0) toPrint += 'Fizz';
  if (i % 5 === 0) toPrint += 'Buzz';
  if (!toPrint) toPrint = i;
  console.log(toPrint);
}
