const setDurrationString = require('./durration');

function calcMs(arr) {   
    
    let [h, m, s] = [0, 0, 0];

    arr.forEach(i => {
       
        if(i.toLowerCase().match(/h|ч/)) {
         h = i.match(/\d+/)[0]
        } else if(i.toLowerCase().match(/m|м/)) {
         m = i.match(/\d+/)[0];
        } else {
         s = i.match(/\d+/)[0];
        }
    });

    return {ms: s*1000+m*60000+h*3600000, durration: setDurrationString(`${h}:${m}:${s}`)};
}

module.exports = calcMs