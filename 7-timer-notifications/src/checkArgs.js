const {returnAlertNoWord, returnAlertNoNum, returnAlertIncorrect} = require('./notifucations');
const calcMs = require('./calcMs')

const reg = /мин$|m$|час$|h$|сек$|s$/;

const checkArgs = (arr) => { 

    let check = true;
    const obj = {};
    
    arr.forEach((item, index) => {

        if(!/\D/g.test(item)) {
            returnAlertNoWord(item);
            check = !check;
        } else if (!/\d+/g.test(item)) {
            returnAlertNoNum(index, item);
            check = !check;
        } else if (!reg.test(item)) {
            returnAlertIncorrect(item);
            check = !check;
        }
    })

    if(check) {
        return calcMs(arr);
    } return;
}

module.exports = {checkArgs};