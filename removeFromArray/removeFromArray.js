const removeFromArray = function(array, items) {
    let itemToRemove = [];
    let inputArray = array;
    let a;
    for (i=0; i<arguments.length; i++){
        itemToRemove[i] = arguments[i];
        a = inputArray.indexOf(itemToRemove[i]);
        if (a === -1){
            continue;
        } else{
            let afterSplice = inputArray.splice(a, 1);
        }
    }
    
    return inputArray;



}

module.exports = removeFromArray
