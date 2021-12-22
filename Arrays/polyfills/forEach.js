exports.customForEach = (arr, forEachCallback) => {
    for(let i = 0; i < arr.length; i++) {
        forEachCallback(arr[i], i, arr);
    }
}