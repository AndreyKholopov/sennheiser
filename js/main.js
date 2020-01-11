// Select DOM Items
const menuBtn = document.querySelector('.btn__menu');
const menuNav = document.querySelector('.menu-list');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

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

//form
function show(state){
	document.getElementById('gray').style.display = state;
	document.getElementById('form__inner').style.display = state;
}
