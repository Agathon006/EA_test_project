export default () => {
    const daysSpan = document.querySelector('#days');
    const hoursSpan = document.querySelector('#hours');
    const minutesSpan = document.querySelector('#minutes');
    const secondsSpan = document.querySelector('#seconds');

    const targetDate = new Date("2024-07-24");

    function updateTime() {

        let leftDate = targetDate - new Date();

        if (leftDate <= 0) {
            clearInterval(interval);
            return;
        }

        daysSpan.textContent = Math.floor(leftDate / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        hoursSpan.textContent = Math.floor((leftDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        minutesSpan.textContent = Math.floor((leftDate % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        secondsSpan.textContent = Math.floor((leftDate % (1000 * 60)) / 1000).toString().padStart(2, '0');
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);
}