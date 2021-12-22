exports.customMap = (arr, mapCallback) => {
    const mappedArray = [];
    for(let i = 0; i< arr.length; i++) {
        mappedArray[i] = mapCallback(arr[i], i, arr);
    }
    return mappedArray;
}