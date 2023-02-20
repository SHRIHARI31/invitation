function countdown() {
    const weddingDate = new Date("March 9, 2023 09:00:00").getTime();

	const currentDate = new Date().getTime();
	const distance = weddingDate - currentDate;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML = formatTime(days);
	document.getElementById("hours").innerHTML = formatTime(hours);
	document.getElementById("minutes").innerHTML = formatTime(minutes);
	document.getElementById("seconds").innerHTML = formatTime(seconds);
}

function formatTime(time) {
	return time < 10 ? "0" + time : time;
}

countdown();

setInterval(() => {
	countdown();
}, 1000);

