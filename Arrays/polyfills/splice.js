exports.customSplice = (arr, startIndex, numElemToDelete, elementsToInsert) => {
    const itemsBefore = [];
    const itemsAfter = [];
    for(let i = 0; i < arr.length; i++) {
        if (i < startIndex) {
            itemsBefore.push(arr[i]);
        } else if (i >= startIndex + numElemToDelete) {
            itemsAfter.push(arr[i]);
        }
    }
    let result = itemsBefore;
    if (!!elementsToInsert && !!elementsToInsert.length) {
        result = result.concat(elementsToInsert);
    }
    result = result.concat(itemsAfter);
    return result;
    
}