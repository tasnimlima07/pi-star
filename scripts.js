const piValue = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';

    function createStars() {
        // Get the number of Pi digits from the input
        const numDigitsInput = document.getElementById("numDigits");
        const numDigits = parseInt(numDigitsInput.value);

        // Validate input
        if (isNaN(numDigits) || numDigits <= 0 || numDigits > 100) {
            alert("Invalid input. Please enter a whole positive number between 1 and 100.");
            return;
        }

        // Clear previous content in the output area
        document.getElementById("outputArea").innerHTML = "";0
        

        // Print stars for each digit
        for (let i = 0; i < numDigits; i++) {
            if (piValue[i] === '.') {
                // Print a newline after the decimal point
                document.getElementById("outputArea").innerHTML += '\n';
            } else {
                // Convert the digit to a number and print stars
                const numStars = parseInt(piValue[i]);
                document.getElementById("outputArea").innerHTML += "*".repeat(numStars) + '\n';
            }
        }
    }

    function clearScreen() {
        // Clear the content in the output area
        document.getElementById("outputArea").innerHTML = "";
        // Clear the input digits field
        document.getElementById("numDigits").value = "";
    }

    function createStarsReversed() {
        // Get the number of Pi digits from the input
        const numDigitsInput = document.getElementById("numDigits");
        const numDigits = parseInt(numDigitsInput.value);
    
        // Validate input
        if (isNaN(numDigits) || numDigits <= 0 || numDigits > 100) {
            alert("Invalid input. Please enter a whole positive number between 1 and 100.");
            return;
        }
    
        // Clear previous content in the output area
        document.getElementById("outputArea").innerHTML = "";
    
        // Print stars for each digit in reverse order
        for (let i = numDigits - 1; i >= 0; i--) {
            if (piValue[i] === '.') {
                // Print a newline after the decimal point
                document.getElementById("outputArea").innerHTML += '\n';
            } else {
                // Convert the digit to a number and print stars
                const numStars = parseInt(piValue[i]);
                document.getElementById("outputArea").innerHTML += "*".repeat(numStars) + '\n';
            }
        }
    }
    
    
    