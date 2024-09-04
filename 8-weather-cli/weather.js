#! /usr/bin/env node
import {printHelp, printSuccess, printError} from "./services/log-service.js"
import {getArgs} from "./helpers/args.js"
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

//fd01cf0b37669673e4ec99090d9ffcde

const saveToken = async (token) => {

    if(!token.length) {
        printError("Не передан токен")
        return
    }
     try {
         await saveKeyValue(TOKEN_DICTIONARY.token, token);
         printSuccess('Токен сохранен');
     } catch (error) {
        printError(error.message)
     }
}


const getForcast = async () => {   

   try {
    const weather = await getWeather('moscow');
    console.log(weather);
    
    } catch (error) {

        switch(error?.response?.status) {
            case 404:
                printError('Неверно указан город');
            break;

            case 401:
                printError('Неверно указан токен');
            break;
            default:
                printError(error.message);
        }    
    }
}


const initCLI = () => {
  const args = getArgs(process.argv);

  if(args.h) {
    printHelp()
  }

  if(args.t) {
    return saveToken(args.t)
  }

  getForcast();

  
}


initCLI();
