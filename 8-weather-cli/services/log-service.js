import chalk from "chalk";
import dedent from 'dedent-js'

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
                    -s : [CITY] для установки города;
                    -h : для вывода города;
                    -t : [API_KEY] для сохранения токена.`
        )

};

const printWeather = (weather) => {//humidity
    console.log(
        dedent`

         Погода в городе ${weather.name}. На улице ${weather.weather[0].description}:

         Температура - ${Math.round(weather.main.temp*10)/10},
         Влажность - ${weather.main.humidity} %,
         Скорость ветра - ${weather.wind.speed}.
         `)
}

export {printError, printSuccess, printHelp, printWeather}
