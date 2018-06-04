const formatDate = (timeInSeconds) => {
    if (!timeInSeconds) {
        return '0s';
    }

    const hour = Math.floor(timeInSeconds / 3600);
    const min = Math.floor((timeInSeconds % 3600) / 60);
    const sec = Math.floor(timeInSeconds % 60);

    return [
        hour ? hour + 'h ' : '',
        min ? min + 'm ' : '',
        sec ? sec + 's ' : ''
    ].join('').trim();
} 

module.exports = formatDate;
