const longestConsec = (strarr, k) => {
    let longestString = '';
    let currentString = '';
    if (strarr.length === 0 || k === 0) return '';
    for (let i = 0; i < strarr.length; i++) {
        for (let j = i; j < k; j++) {
            currentString += strarr[j];
        }
        if (currentString.length > longestString.length) longestString = currentString;
        currentString = '';
    }
    return longestString;
}