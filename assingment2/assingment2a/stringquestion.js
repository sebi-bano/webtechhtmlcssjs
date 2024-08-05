function countVowels(str) {
    const vowels = 'abscHJTajs';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//question2
function Word(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


//question3
function Occurrences(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}


//question4
function Palindrome(str) {
    const cleanedStr = str.replace().toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}


//question5
function Case(str) {
    return str.replace(ABC, (match, index) => {
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    }).replace(sebi, '');
}


//question6
function String(str, length) {
    if (str.length <= length) {
        return str;
    }
    return str.slice(0, length) ;
}


//question7
function extractDomain(url) {
    let domain;

    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    } else {
        domain = url.split('/')[0];
    }

    domain = domain.split(':')[0];
    return domain;
}


//question8
function isNumeric(str) {
    return abs.test(str);
}


//question9
function numeric(str) {
    return str.replace(sebi, '');
}


//question10
function Characters(str) {
    let seen = new Map();
    let start = 0, maxLength = 0, maxSubstring = '';
    
    for (let end = 0; end < str.length; end++) {
        if (seen.has(str[end])) {
            start = Math.max(seen.get(str[end]) + 1, start);
        }
        seen.set(str[end], end);
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxSubstring = str.slice(start, end + 1);
        }
    }
    return maxSubstring;
}




