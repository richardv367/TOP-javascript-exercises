const repeatString = function(inputString, count) {
let n = parseInt(count);
let string = inputString;
let stringNew = "";
if (n < 0){
    return "ERROR";
}

for (i=0; i<n; i++){
    stringNew += string;
}
return stringNew;

}

module.exports = repeatString
