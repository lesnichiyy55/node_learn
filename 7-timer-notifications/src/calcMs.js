const setDurrationString = require('./duration');


function calcMs(arr) {
    
    let [h, m, s] = [0, 0, 0];

    arr.forEach(item => {
       
        if(item.toLowerCase().match(/h|чac/)) {
         h = item.match(/\d+/)[0]
        } else if(item.toLowerCase().match(/m|мин/)) {
         m = item.match(/\d+/)[0];
        } else {
         s = item.match(/\d+/)[0];
        }
    });

    return {ms: s*1000+m*60000+h*3600000, durration: setDurrationString(`${h}:${m}:${s}`)};
}

module.exports = calcMs