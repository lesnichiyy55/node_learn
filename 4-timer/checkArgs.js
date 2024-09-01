const calcMs = require('./calcMs');

function checkArgs(arr) {

    const reg = /ч|м|с|h|m|s/;

    let check = true;

    arr.forEach((item, index) => {
        const word = item.match(/\D+/)[0];        
        if(!Boolean(word.match(reg))) {
            console.log(`В аргументе ${index+1} указано ${check}.\nНеобходимо указать корректное значение времени. Например: 'минуты', 'min' или 'm'`);
            check = !check;
        }
    })
    
    if(check) {        
        return calcMs(arr)
    } return
}

module.exports = checkArgs;