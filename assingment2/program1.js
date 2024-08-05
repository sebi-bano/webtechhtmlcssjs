function merge(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
const array1 = [1, 2, 3,6,7,8];
const array2 = [3, 4, 5,6,9,12];
console.log(merge(array1, array2));




//question 2
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));




//question 3
function average(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

console.log(average([1, 2, 3, 4, 5]));




//question 4
function largeNum(numbers) {
    return Math.max(...numbers);
}

console.log(largeNum([1, 2, 3, 4, 5])); 



//question 5
function flatten(nestedArray) {
    return nestedArray.flat(5);
}
console.log(flatten([1, [2, [3, [4]], 5]]));




//question 6
function remove(array) {
    return array.filter(Boolean);
}

console.log(remove([0, 1, false, 2, '', 3]));



//question 7
function sumNum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumNum([1, 2, 3, 4, 5]));



//question 8
function findIndex(array, element) {
    return array.indexOf(element);
}
console.log(findIndex([1, 2, 3, 4, 5], 3));



//question 9
function element(array) {
    const avg = average(array);
    return array.filter(num => num > avg);
}

console.log(element([1, 2, 3, 4, 5]));






