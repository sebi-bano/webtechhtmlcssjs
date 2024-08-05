function sum(a, b) {
    return a + b;
}


//question2
function String(str) {
    return str.split('').reverse().join('');
}


//question3
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


//question4
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


//question5
function mapArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

//question6
function uniqueElements(arr) {
    return [...new Set(arr)];
}


//question7
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

//question8
function Word(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

//question9
function Arguments(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}


//question10
function mergeArrays(arr1, arr2) {
    const mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }
    return mergedArray;
}
