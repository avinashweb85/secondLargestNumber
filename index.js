let arr = [2, 5, 4, 3, 6, 12, 45, 122];

function getLargestNumber(arr) {
    let largestNumber = arr[0];
    let secondLargest = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            secondLargest = largestNumber;
            largestNumber = arr[i];
        } else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};

console.log(getLargestNumber(arr))