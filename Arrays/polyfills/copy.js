exports.customCopy = (arr) => {
    const copiedArray = new Array(arr.length);
    for(let i = 0; i < arr.length; i++) {
        copiedArray[i] = arr[i];
    }

    // const copiedArray = [];
    // for(let i = 0; i < arr.length; i++) {
    //     copiedArray[i] = arr[i];
    // }
    
    // const copiedArray = [];
    // for(let value of arr) {
    //     copiedArray.push(value);
    // }

    return copiedArray;
}