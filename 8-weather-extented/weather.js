import {getArgs} from './heplers/args.js'

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    
}

initCLI();