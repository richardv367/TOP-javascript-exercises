const reverseString = function(inputString) {
let originalString = inputString;
let reverse = [];
let n = originalString.length;

for (i=0; i<n; i++){
    reverse[i] = originalString[n-1-i];
}
return reverse.join("");
}

module.exports = reverseString
