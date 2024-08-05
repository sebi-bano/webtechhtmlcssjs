function getObjectKeys(obj) {
    return Object.keys(obj);
}


//question2
function Property(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}


//question3
function Property(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

//question4
function Objects(obj1, obj2) {
    return {...obj1, ...obj2};
}

//question5
function Pairs(obj) {
    return Object.entries(obj);
}


//question6
function Object(obj) {
    const inverted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}

//question7
function Equal(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) return false;
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
}

//question8
function Property(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}



//question9
function Value(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
}


//question10
function filter(obj, callback) {
    const result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && callback(obj[key], key)) {
            result[key] = obj[key];
        }
    }
    return result;
}


