function setDurrationString(str) {

const arr = str.split(':');

return arr.map(i => {
                if(Number(i) < 10) {
                return `0${i}`;
                } else {
                    return i;
                }
            }).toString().replace(/\,/g,':');
}

module.exports = setDurrationString;