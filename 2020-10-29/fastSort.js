const fastSort = function(arr, startIdx, endIdx) {
    if (!arr instanceof Array) return [];
    if (arr.length === 0) return [];
    if (startIdx >= endIdx) return;
    let pivot = arr[startIdx];
    let mark = startIdx;
    for (let i = startIdx+1; i <= endIdx; i++) {
        const num = arr[i];
        if (num < pivot) {
            mark += 1;
            let _num = arr[mark]
            arr[mark] = num;
            arr[i] = _num;
        }
    }
    arr[startIdx] = arr[mark];
    arr[mark] = pivot;
    fastSort(arr, startIdx, mark - 1);
    fastSort(arr, mark + 1, endIdx);
    return arr;
}

const bubbleSort = function(arr) {
    let sortBorder = arr.length - 1;
    let lastExchangeIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let isSorted = true;
        for (let j = 0; j < sortBorder; j++) {
            if (arr[j] > arr[j+1]) {
                let mem = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = mem;
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        if (isSorted) return arr; // 表示整体都没有交换，已经排序正常了 大约从500ms提升至300ms
        sortBorder = lastExchangeIndex; // 边界，表示后面的已经没有交换，不需要再比较了 大约从300ms提升至260ms
    }
    return arr;
}

function testSpeed(func, runTimes) {
    const sTs = Date.now();
    const TAR_ARR = [3,-1,4,1,5,9,3,-1,4,1,5,9,3,-1,4,1,5,9,3,-1,4,1,5,9];
    for (let i = 0; i < runTimes; i++) {
        const result = func(TAR_ARR, 0, TAR_ARR.length - 1);
        if (i == 0) console.log(result);
    }
    const eTs = Date.now();
    console.log(func.name, eTs - sTs, 'ms')
}

testSpeed(fastSort, 10000000)
testSpeed(bubbleSort, 10000000)