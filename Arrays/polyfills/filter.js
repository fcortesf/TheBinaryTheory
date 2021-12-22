exports.customFilter = (arr, filterCallback) => {
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++) {
        if (!!filterCallback(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}