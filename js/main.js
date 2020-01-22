// Select DOM Items
const menuBtn = document.querySelector('.btn__menu');
const menuNav = document.querySelector('.menu-list');
const main = document.querySelector('main');
const sections = main.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

//responsive button
function toggleMenu() {
	if(!showMenu) {
		menuBtn.classList.add('close');
		menuNav.classList.add('show');

		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menuNav.classList.remove('show');

		showMenu = false;
	}
}

//animated navbar
const options = {
	threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
	entries.forEach(entry => {
		const className = entry.target.className;
		const activeAnchor = document.querySelector(`[data-page=${className}]`);
		const coords = activeAnchor.getBoundingClientRect();
		const direction = {
			height: coords.height + 10,
			width: coords.width,
			top: coords.top - 5,
			left: coords.left
		};
		
		if (entry.isIntersecting) {
			bubble.style.setProperty('left', `${direction.left}px`);
			bubble.style.setProperty('top', `${direction.top}px`);
			bubble.style.setProperty('width', `${direction.width}px`);
			bubble.style.setProperty('height', `${direction.height}px`);
		}
	});
}

sections.forEach(section => {
	observer.observe(section);
});

//form
function show(state){
	document.getElementById('gray').style.display = state;
	document.getElementById('form__inner').style.display = state;
}
