const add = require('./add');
const multyply = require('./multyply');
const subtract = require('./subtract');
const divide = require('./divide');

const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[3]);
const operation = process.argv[4];
const countArgs = process.argv.length - 2;

if(operation) {
    switch(operation.toLowerCase()) {
        case 'add':
            add(firstNum, secondNum);
        break;
        case 'multyply':
            multyply(firstNum, secondNum);
        break;
        case 'subtract':
            subtract(firstNum, secondNum);
        break;
        case 'divide':
            divide(firstNum, secondNum);
        break;
        default:
            console.log('Третий аргумент может быть один из:\nа) add;\nb) multyply;\nа) subtract;\nа) divide;');
    }
} else {
    console.log(`Должно быть указано три аргумента. Указано - ${countArgs}`)
}