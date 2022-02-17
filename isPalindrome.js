// Write your code below
function isPalindrome(str) {
    let tempArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
         tempArr.push(str[i]);
    };
    for (let i = 0; i < str.length; i++) {
        if (str[i] != tempArr[i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("racecar"));