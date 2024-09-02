const { Worker } = require('worker_threads');
const {performance, PerformanceObserver } = require('perf_hooks');
const {getСalculation} = require('./app');

const performanceObserver = new PerformanceObserver((items) => {
	items.getEntries().forEach((entry) => {
		console.log(`Продолжительность выполнения ${entry.name}: ${entry.duration}`);
	});
});
performanceObserver.observe({ entryTypes: ['measure'] });

function workerFunction(index) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData:{
                index
            } 
        });
        worker.on('message', (msg) => {
            resolve(msg);
        });
    });
}

async function getWorkerСalculation() {
    performance.mark('start worker');
    let workerRes = 0;    
    const workerArr = await Promise.all(
        [
        workerFunction(0), workerFunction(1), workerFunction(2), workerFunction(3),
        workerFunction(4), workerFunction(5), workerFunction(6), workerFunction(7),
        workerFunction(8), workerFunction(9), workerFunction(10), workerFunction(11),
        workerFunction(12), workerFunction(13), workerFunction(14), workerFunction(15)
       ]
    )
    workerArr.forEach(res => {
        workerRes += res;
    });    
    console.log(`Результат подсчета workerFunction = ${workerRes}`);
    performance.mark('end worker');
    performance.measure('workerFunction', 'start worker', 'end worker')
    
    performance.mark('start');
    getСalculation();
    performance.mark('end');
	performance.measure('сalculationFunction', 'start', 'end')

}

getWorkerСalculation();