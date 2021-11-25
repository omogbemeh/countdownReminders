/** @format */
'use strict';

const now = new Date();
const millisecondsToDay = 1000 * 60 * 60 * 24;
const labelChristmasCountdown = document.querySelector('.christmas-countdown');
const labelNewYearCountdown = document.querySelector('.newyear-countdown');
const labelJapaCountdown = document.querySelector('.japa-countdown');

const christmasTimer = () => {
	const christmasDay = new Date(`${now.getFullYear()}`, '11', '25');
	let diff = Math.abs(now - christmasDay);
	diff = Math.trunc(diff / millisecondsToDay);
	switch (diff) {
		case 0:
			labelChristmasCountdown.textContent = "It's Christmas day!!🎅🏾❅";
			break;
		case 1:
			labelChristmasCountdown.textContent = "It's Christmas Eve!!☃️❅";
			break;
		default:
			break;
	}
	if (diff > 7)
		labelChristmasCountdown.textContent = `It's ${diff} days to Christmas`;
	else labelChristmasCountdown.textContent = `${diff} days`;
};

const newYearCountDown = () => {
	const newYear = new Date(1 + now.getFullYear(), 0, 1);
	const diff = Math.trunc(Math.abs(newYear - now) / millisecondsToDay);
	switch (diff) {
		case 0:
			labelNewYearCountdown.textContent = 'Happy New Year!! 🎉🎉🍻';
			break;
		case 1:
			labelNewYearCountdown.textContent = "It's New years Eve!!☃️❅";
			break;
		default:
			break;
	}
	if (diff > 7)
		labelNewYearCountdown.textContent = `The new year is in ${diff} days.`;
	else labelNewYearCountdown.textContent = `${diff} days`;
};

const travelTimer = () => {
	const dDay = new Date(2021, 11, 15);
	const diff = Math.trunc((dDay - now) / millisecondsToDay);
	switch (diff) {
		case 1:
			labelJapaCountdown.textContent = `The day has come!!!`;
			break;
		case 2:
			labelJapaCountdown.textContent = `Japa Eve babyyyyyy!!`;
			break;
		default:
			break;
	}
	if (diff > 7) {
		labelJapaCountdown.textContent = `You're travelling in ${diff} days babyyyyyy!!`;
		return;
	}
	labelJapaCountdown.textContent = `${diff} days to Japa`;
	console.log(diff);
};

christmasTimer();
newYearCountDown();
travelTimer();
