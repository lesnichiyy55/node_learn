const {returnAlertNotArgs, alertDone} = require('./notifucations')
const {checkArgs} = require('./checkArgs')
const returnСurrentTime = require('./currentTime')

function runApp() {

  let argsArr;

  if(!process.argv[2]) {
    returnAlertNotArgs();
    return;
  } else {
    argsArr = process.argv.splice(2)
                    .toString()
                    .replace(/(?<=\d)(,)(?=\D)/g,'')
                    .split(',');
  }

  const objDuration = checkArgs(argsArr);

  if(objDuration && objDuration.ms > 0) {
    const firstTime = returnСurrentTime();
   setTimeout(() => {
    alertDone(firstTime, returnСurrentTime(), objDuration.durration)
   },objDuration.ms)
} return;

}

runApp();