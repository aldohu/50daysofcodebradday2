const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const circleArr = Array.from(circles);
const lineArr = Array.from(lines);
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
let i = 0;

nextBtn.addEventListener('click', () => {
	const actives = document.querySelectorAll('.active');
	console.log(i);

	console.log(actives[i]);
	if (i > actives.length - 1) {
		return;
	}
	let active = actives[i];
	console.log(active);
	const next = active.nextElementSibling;
	const activeLine = document.querySelector('.active-line');

	const nextLine = activeLine.nextElementSibling;

	next.classList.add('active');

	nextLine.classList.add('active-line');
	i++;
});

previousBtn.addEventListener('click', () => {
	const actives = document.querySelectorAll('.active');

	if (i < 0) {
		return;
	}
	let active = actives[i];
	const previous = active.previousElementSibling;
	const activeLine = document.querySelector('.active-line');
	const previousLine = activeLine.previousElementSibling;

	previous.classList.add('active');

	previousLine.classList.add('active-line');
	i--;
});
