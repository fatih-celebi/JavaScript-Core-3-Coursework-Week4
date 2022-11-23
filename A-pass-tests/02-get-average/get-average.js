// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let onlyNumbers = numbers.filter((item) => {
        return typeof item == "number";
    });
    let sum = 0;
    onlyNumbers.forEach(number => {
        sum += number;
    });
    let average = sum / onlyNumbers.length;
    return average;
}

//numbers = [1, 2, 6, 8, "aaa", true, 76];
//console.log(average(numbers));


module.exports = average;
