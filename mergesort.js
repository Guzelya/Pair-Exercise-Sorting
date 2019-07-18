function split(array){
    let firsthalf = array.splice(0,array.length/2);
    let secondhalf = array;
    return [firsthalf, secondhalf]
}

function merge(array){
    let firsthalf = array[0];
    let secondhalf = array[1];
    let merged = [];
    if( firsthalf > secondhalf){
        merged.push(secondhalf[0]);
        merged.push(firsthalf[0]);
        console.log(merged);
        return merged;
    } else {
        merged.push(firsthalf[0]);
        merged.push(secondhalf[0]);
        return merged;
    }

}

