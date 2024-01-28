function findFloor(arr, x) {
    left = 0;
    right = arr.length - 1;
    mid = Math.floor((left + right) / 2);
    while (left <= right){
        if (arr[mid] <= x && arr[mid + 1] > x){
            return arr[mid]
        } else if (arr[mid] > x){
            right = mid - 1;
        }   else {
            left = mid + 1;
        }
    }
    return -1;
  
}
console.log(findFloor([1,2,8,10,10,12,19], 5))

console.log('hi')

module.exports = findFloor