import {getArgs} from './heplers/args.js'
import { printHelp } from './log-services/log-service.js';
import {saveToken, saveCity, saveLanguage} from './saveargs/saveargs.js'



const initCLI = () => {
    const args = getArgs(process.argv);   

    if(args.t) {
        return saveToken(args.t)
    }

    if(args.s) {
        return saveCity(args.s)
    }    

    if(args.h) {
        printHelp();
    }

    if(args.l) {
        saveLanguage(args.l);
    }
    
}

initCLI();