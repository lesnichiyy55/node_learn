function returnСurrentTime() {
    const currentDate = new Date();

    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    return `${date} в ${time}`
    
}

module.exports = returnСurrentTime;