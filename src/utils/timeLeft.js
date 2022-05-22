export const calculateTimeLeft = () => {
    let countDownDate = new Date(2022, 5, 23, 8,0, 0).getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)) % 10;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
};
