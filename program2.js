const num = prompt("Enter an integer");
const digits = num.length;
var sum = 0;
var temp = num;

while (temp > 0) {

    var remainder = temp % 10;
    sum += (remainder ** digits);
    
    temp = parseInt(temp / 10);
}

if (sum == num) 
    console.log(num + " is an Armstrong number");
else 
    console.log(num + " is not an Armstrong number");