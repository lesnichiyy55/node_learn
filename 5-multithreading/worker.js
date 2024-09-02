const { parentPort, workerData } = require('worker_threads');
const {createArrs} = require('./createArrs');

function workerFunction({index}) {
    const arr = createArrs()[index];
    let count = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]%3 === 0) {
            count += 1;
        }
    }    
    return count;
};

parentPort.postMessage(workerFunction(workerData));