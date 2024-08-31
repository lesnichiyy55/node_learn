function multyply(firstNum, secondNum) {
    if(!isNaN(firstNum+secondNum)) {
     console.log(firstNum*secondNum)
    } else {
     console.log('Первый и второй аргументы должны быть числами')
    }
 }
 
 module.exports = multyply;