const readline = require('readline');

function divide(a, b) {
    return a / b;
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter a number: ", function(x) {
        rl.question("Enter another number: ", function(y) {
            try {
                let num1 = parseInt(x);
                let num2 = parseInt(y);
                
                if (isNaN(num1) || isNaN(num2)) {
                    throw new Error("Invalid input. Please enter valid numbers.");
                }
                
                let result = divide(num1, num2);
                console.log("Result of division:", result);
            } catch (error) {
                console.error("An error occurred:", error.message);
            } finally {
                rl.close();
            }
        });
    });
}

main();