/**
 * линейная функция. Возворащает толко подсчет элементов, кратных 3-м
 */

function getСalculation() {
    
    const arr = Array.from(Array(300001).keys()).splice(1);

    let count = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]%3 === 0) {
            count += 1;
        }
    }
    
    console.log(`Результат подсчета сalculationFunction = ${count}`);
}

module.exports = {getСalculation};