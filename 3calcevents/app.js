const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[3]);
const operation = process.argv[4].toLowerCase();
const countArgs = process.argv.length - 2;

myEmitter.on('add', (firstNum, secondNum, countArgs) => {
    if(!isNaN(firstNum+secondNum)) {
        countArgs == 3 ? console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`) : console.log(`Должно быть указано три аргумента. Указано - ${countArgs}`);
    } else {
        console.log('Первый и второй аргументы должны быть числами');
    }
})

myEmitter.on('multyply', (firstNum, secondNum, countArgs) => {
    if(!isNaN(firstNum+secondNum)) {
        countArgs == 3 ? console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`) : console.log(`Должно быть указано три аргумента. Указано - ${countArgs}`);
    } else {
        console.log('Первый и второй аргументы должны быть числами');
    }
})

myEmitter.on('subtract', (firstNum, secondNum, countArgs) => {
    if(!isNaN(firstNum+secondNum)) {
        countArgs == 3 ? console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`) : console.log(`Должно быть указано три аргумента. Указано - ${countArgs}`);
    } else {
        console.log('Первый и второй аргументы должны быть числами');
    }
})

myEmitter.on('divide', (firstNum, secondNum, countArgs) => {
    if(secondNum == 0) {
        console.log('Делитель не может быть равен 0');
        return;
    }
    if(!isNaN(firstNum+secondNum)) {
        countArgs == 3 ? console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`) : console.log(`Должно быть указано три аргумента. Указано - ${countArgs}`);
    } else {
        console.log('Первый и второй аргументы должны быть числами');
    }
})

switch(operation) {
    case 'add':
    case 'multyply':
    case 'subtract':
    case 'divide':
        myEmitter.emit(operation, firstNum, secondNum, countArgs);
    break;
    default:
        console.log('Третий аргумент может быть один из:\nа) add;\nb) multyply;\nc) subtract;\nd) divide;');
}