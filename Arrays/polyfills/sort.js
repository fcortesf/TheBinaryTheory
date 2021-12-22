exports.customSort = (arr) => {
    let arrayChanged = true;
    while(arrayChanged) {
        arrayChanged = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]){
                swap(arr, i);
                arrayChanged = true;
            }
        }
    }
}

function swap(arr, i) {
    const aux = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = aux;
}
