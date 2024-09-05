import chalk from "chalk";
import dedent from 'dedent-js'
//import { getIcon } from "./api.service.js";



const printError = (error) => {  
    console.log(`${chalk.bgRed( 'ОШИБКА' )}\n${error}`)
};

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen( 'УСПЕШНО' )}\n${message}`)
};

const printHelp = () => {
     console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров : вывод погоды;
                    -s : [CITY...] для установки города(-ов);
                    -h : для вывода города;
                    -t : [API_KEY] для сохранения токена;
                    -l : для сохранения языковых настроек (ext. ru)`
        )

};




const printWeather = (weather) => {
    const icon = getIcon(weather.weather[0].icon);
    console.log(
        dedent` 
         ${chalk.underline.bgBlue('Погода в городе')} ${weather.name}
         На улице ${weather.weather[0].description} ${icon} :

         Температура - ${Math.round(weather.main.temp*10)/10},
         Влажность - ${weather.main.humidity} %,
         Скорость ветра - ${weather.wind.speed}.
         `)
}

export {printError, printSuccess, printHelp, printWeather}