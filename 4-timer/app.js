const setArgs = require('./setArgs');
const returnСurrentTime = require('./currentTime');

let arr;

if(process.argv[2]) {
    arr = process.argv.splice(2)
                    .toString()
                    .replace(/\,(?=\D)/g,'')
                    .split(',');
} else {
    console.log('необходимо указать хотя бы один аргумент');
    return;
}

const argsObj = setArgs(arr);



if(argsObj.ms > 0) {
    const firstTime = returnСurrentTime();
   setTimeout(() => {
    console.log(`Таймер был установлен ${firstTime}.\nЗаданная продолжительность: ${argsObj.durration}.\nТаймер отработал ${returnСurrentTime()}`);
   },argsObj.ms)
} return;
