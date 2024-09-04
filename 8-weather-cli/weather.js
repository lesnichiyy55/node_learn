#! /usr/bin/env node
import {printHelp} from "./services/log-service.js"
import {getArgs} from "./helpers/args.js"
import { saveKeyValue } from "./storage/storage.service.js";


const initCLI = () => {
  const args = getArgs(process.argv);

  if(args.h) {
    printHelp()
  }

  if(args.t) {    
    saveKeyValue("token", args.t)
  }
}


initCLI();
