const readline = require
function divide(a, b) {
  return a / b;
}

function main() {
  try {
      let x = parseInt(prompt("Enter a number: "));
      let y = parseInt(prompt("Enter another number: "));
      
      let result = divide(x, y);
      console.log("Result of division:", result);
      
  } catch (error) {
      console.error("An error occurred:", error);
  }
}

main();