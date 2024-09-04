import chalk from "chalk";
import dedent from 'dedent-js'

const printError = (error) => {
  
    console.log(error)

};

const printSuccess = (message) => {

    console.log(message)

};

const printHelp = () => {

     console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров : вывод погоды;
                    -s : [CITY] для установки города;
                    -h : для вывода города;
                    -t : [API_KEY] для сохранения токена.`
        )

};

printHelp()

export {printError, printSuccess, printHelp}
