const array = ([6, 3, 0, 30, 7]);
const array1 = ([, 3, 0, 30, 7]); 
const array2 = ([, 0, 0, undefined, 7]);
console.log(countTruthy(array));
console.log(countTruthy(array1));
console.log(countTruthy(array2));
function countTruthy(array) {
    let count = 0;
    for (elements of array)
        if (elements) count++;
    return count;
}

