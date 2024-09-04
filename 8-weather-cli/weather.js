#! /usr/bin/env node
import {printHelp, printSuccess, printError} from "./services/log-service.js"
import {getArgs} from "./helpers/args.js"
import { saveKeyValue } from "./storage/storage.service.js";

const saveToken = async (token) => {
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
