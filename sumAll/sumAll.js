const sumAll = function(n1, n2) {
    let startInteger;
    let endInteger;
    let difference;
    let sum = 0;
    if (n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)){
        return "ERROR";
    }

    if (n1>n2){
        startInteger = n2;
        endInteger = n1;
        difference = n1 - n2;
        for(i=0; i<difference; i++){
            sum += (startInteger + i);
        }
    } else{
        startInteger = n1;
        endInteger = n2;
        difference = n2 - n1;
        for(i=0; i<difference; i++){
            sum += (startInteger + i);
        }
    }


    sum += endInteger;
    return sum;




}

module.exports = sumAll
