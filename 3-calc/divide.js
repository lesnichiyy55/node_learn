function divide(firstNum, secondNum) {
    if(!isNaN(firstNum+secondNum)) {
        secondNum == 0 ? console.log('Делитель не может быть равен 0') : console.log(firstNum/secondNum)
    } else {
     console.log('Первый и второй аргументы должны быть числами')
    }
 }
 
 module.exports = divide;