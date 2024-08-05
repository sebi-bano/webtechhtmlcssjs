function getMaxValue(arr) {
    return Math.max(...arr);
}

//question2
function Index(arr, element) {
    return arr.indexOf(element);
}


//question3
function reverseArray(arr) {
    return arr.slice().reverse();
}


//question4
function flattenArray(arr) {
    return arr.flat(Infinity);
}


//question5
function Values(arr) {
    return arr.filter(Boolean);
}


//question6
function Numbers(arr) {
    return arr.filter(num => num % 2 === 0);
}


//question7
function Array(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


//question8
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


//question9
function section(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}



//question10
function Array1(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
