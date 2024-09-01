const calcMs = require('./calcMs');

function checkArgs(arr) {

    const reg = /ч|м|с|h|m|s/;

    arr.forEach((item, index) => {
        const check = item.match(/\D+/)[0];
        if(!Boolean(check.match(reg))) {
            console.log(`В аргументе ${index+1} указано ${check}.\nНеобходимо указать корректное значение времени. Например: 'минуты', 'min' или 'm'`);
            return;
        }
    })

    return calcMs(arr);
}

module.exports = checkArgs;