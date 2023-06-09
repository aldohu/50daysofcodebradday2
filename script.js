const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
let currentIndex = 0;

circles[currentIndex].classList.add('active');

nextBtn.addEventListener('click', () => {
	if (currentIndex >= circles.length - 1) {
		return; // Exit the function if already at the end
	}

	circles[currentIndex].classList.remove('active');
	currentIndex++;

	circles[currentIndex].classList.add('active');

	for (let i = 0; i < currentIndex; i++) {
		lines[i].classList.add('active-line');
		circles[i].classList.add('active');
	}
});

previousBtn.addEventListener('click', () => {
	if (currentIndex <= 0) {
		return; // Exit the function if already at the beginning
	}

	circles[currentIndex].classList.remove('active');
	currentIndex--;

	circles[currentIndex].classList.add('active');

	for (let i = currentIndex; i < circles.length - 1; i++) {
		lines[i].classList.remove('active-line');
	}
});
