/**
 * createArrs - создает массив из 300 000 чисел и возвращает
 * двумерный массив из 16 элементов при помощи splitArr, принимающая
 * исходных массив и нужное количество элементов 
 */

function createArrs() {
    let arr = Array.from(Array(300001).keys()).splice(1);
    const count = arr.length / 16;
    return splitArr(arr, count);
}

function splitArr(arr, count) {
    const arrs = [];
    while (arr.length) {
        arrs.push(arr.splice(0, count));
    };
    return arrs;
};

module.exports = {createArrs, splitArr}