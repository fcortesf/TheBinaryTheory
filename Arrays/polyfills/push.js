exports.customPush = (arr, ...elementsToPush) => {
    //[arr, element1,...elementN]
    for(let i = 0; i < elementsToPush.length; i++) {
        arr.length = arr.length + 1;
        arr[arr.length - 1] = elementsToPush[i];
    }

    // for(let i = 0; i < elementsToPush.length; i++) {
    //     arr[arr.length] = elementsToPush[i];
    // }
}