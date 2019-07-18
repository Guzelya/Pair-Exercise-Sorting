const swapObj = {}
swapObj.swap = () => {
    console.log('swapped')
}

const bubbleSort = (arr, callback) => {
    let sorted = true;
    let greater;
    if (arr.length < 2){
        return arr;
    }
    else {
        while (sorted){
            sorted = false
            for (let i = 0; i < arr.length - 1; i++){
                if (callback){
                    arr.sort(callback(arr[i], arr[i + 1]));
                    sorted = true;
                }
                else if (arr[i] > arr[i + 1]){
                    greater = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = greater;
                    sorted = true
                    swapObj.swap()
                }
            }
        }
        return arr;
    }
}

