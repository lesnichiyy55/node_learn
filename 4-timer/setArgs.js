const checkArgs = require('./checkArgs');

function setArgs(arr) {

    let check = true

    arr.forEach((arg, index) => {
        if(!Boolean(arg.match(/\D/))) {
            console.log(`В аргументы № ${index + 1} указано только число. Необходимо указать значение времени (например: "мин")`);
            check = !check;
        }
    });

    
    if(check) {
        return checkArgs(arr);
    } return;
    
}

module.exports = setArgs;