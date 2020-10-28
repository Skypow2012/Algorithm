const fastSort = function(arr) {
    if (!arr instanceof Array) return [];
    if (arr.length === 0) return [];
    let tar = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        if (num < tar) {
            left.push(num)
        } else {
            right.push(num)
        }
    }
    return [...fastSort(left), tar, ...fastSort(right)]
}

const bubbleSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                let mem = arr[j+1]
                arr[j+1] = arr[j];
                arr[j] = mem;
            }
        }
    }
    return arr;
}

function testSpeed(func, runTimes) {
    const sTs = Date.now();
    for (let i = 0; i < runTimes; i++) {
        const result = func([3,-1,4,1,5,9]);
        if (i == 0) console.log(result);
    }
    const eTs = Date.now();
    console.log(func.name, eTs - sTs, 'ms')
}

testSpeed(fastSort, 10000000)
testSpeed(bubbleSort, 10000000)