function calculateAverage(numbers) {
  let sum = 0;
  
  for (let i = 0; i <= numbers.length; i++) { 
    
    
      sum += numbers[i];
  }
  return sum / numbers.length; 
}
debugger
const numbers = [10, 20, 30, 40, 50];
const avg = calculateAverage(numbers);
console.log(`The average is: ${avg}`);