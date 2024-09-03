const notifier = require('node-notifier');

function returnAlertNotArgs() {

    const msg = notifier.notify({
        title: 'ОШИБКА',
        message: 'Необходимо указать аргументы для таймера',
    });

    return msg;
}

function returnAlertNoWord(value) {

    const msg = notifier.notify({
        title: 'ОШИБКА',
        message: `Значение "${value}" указано без параметра:\n- час или h;\n- мин или m;\n- сек или s.`,
    });

    return msg;
}

function returnAlertNoNum(index, value) {

    const msg = notifier.notify({
        title: 'ОШИБКА',
        message: `в аргументе № ${index+1} указано только "${value.toString().toUpperCase()}".\nНеобходимо задать нужный интервал времени.`,
    });

    return msg;
}

function returnAlertIncorrect(value) {

    const msg = notifier.notify({
        title: 'ОШИБКА',
        message: `Не распознано слово "${value.toString().toUpperCase().match(/\D+/)}".\n- час или h;\n- мин или m;\n- сек или s.`,
    });

    return msg;
}

function alertDone(firstTime, secondTime, durration) {
    const msg = notifier.notify({
                    title: 'Таймер:',
                    message: `Установлен ${firstTime}.\nОтработал ${secondTime}.\nПродолжительность: ${durration}.\n`,                    
                });

    return msg;
}

module.exports = {returnAlertNotArgs, returnAlertNoWord, returnAlertNoNum, returnAlertIncorrect, alertDone};