const checkArgs = require('./checkArgs');

function setArgs(arr) {
    arr.forEach((arg, index) => {
        if(!Boolean(arg.match(/\D/))) {
            console.log(`В аргументы № ${index + 1} указано только число. Необходимо указать значение времени (например: "мин")`);
            return;
        }
    });
    return checkArgs(arr);
}

module.exports = setArgs;