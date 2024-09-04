import {homedir} from 'os';
import {join, basename} from 'path';

const filePath = join(homedir(), 'weather-data.json')

const saveKeyValue = (key, value) => {
     console.log(basename(filePath))
}

export {saveKeyValue};