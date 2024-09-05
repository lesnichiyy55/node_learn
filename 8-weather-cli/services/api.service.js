import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
import axios from "axios";

const getIcon = (icon) => {

    switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

const getWeather = async() => {
    
    const {token, city} = await getKeyValue(TOKEN_DICTIONARY);

    if(!token) {
        throw new Error('Не задан ключ API. Создайте его командой -t[API_KEY]');
    } else if(!city) {
        throw new Error('Не задан город. Создайте его командой -s[CITY]');
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: "ru",
            units: 'metric'
        }
    })

    return data;
}


export {getWeather, getIcon}