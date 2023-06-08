
   window.addEventListener('load', function () {
    // Hamburger Menu
	var hamburgerButton = document.getElementById('burger-menu-button');

	hamburgerButton.addEventListener('click', function () {
		document.body.classList.toggle('hamburger-menu-active');
	});

	var anchors = document.querySelectorAll('a[href^="#"]');
	for (let i = 0; i < anchors.length; i++) {
		anchors[i].addEventListener('click', function () {
			document.body.classList.remove('hamburger-menu-active');
		});
	}

	// const hamburgerButtons = document.getElementsByClassName('hamburger-menu-toggler');

	// for (let i = 0; i < hamburgerButtons.length; i++) {
	// 	const element = hamburgerButtons[i];
	// 	hamburgerButtons[i].addEventListener('click', function () {
	// 		document.body.classList.toggle('hamburger-menu-active');
	// 	});
	// }

	// Scrolled Page class
	window.addEventListener('scroll', function () {
		if (window.scrollY > 0) {
			document.body.classList.add('page-scrolled');
		} else {
			document.body.classList.remove('page-scrolled');
		}
	});
});