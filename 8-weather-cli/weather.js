#! /usr/bin/env node
import {printHelp, printSuccess, printError} from "./services/log-service.js"
import {getArgs} from "./helpers/args.js"
import { saveKeyValue } from "./storage/storage.service.js";

//fd01cf0b37669673e4ec99090d9ffcde

const saveToken = async (token) => {

    if(!token.length) {
        printError("Не передан токен")
        return
    }
     try {
         await saveKeyValue("token", token);
         printSuccess('Токен сохранен');
     } catch (error) {
        printError(error.message)
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
}


initCLI();
