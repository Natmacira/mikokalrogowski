
   window.addEventListener('load', function () {
    // Hamburger Menu
	var hamburgerButton = document.getElementById('burger-menu-button');
	var hamburgerButtonClose = document.getElementById('burger-menu-button-close');


	hamburgerButton.addEventListener('click', function () {
		document.body.classList.add('hamburger-menu-active');
	});
	hamburgerButtonClose.addEventListener('click', function () {
		document.body.classList.remove('hamburger-menu-active');
	});

	// var anchors = document.querySelectorAll('a[href^="#"]');
	// for (let i = 0; i < anchors.length; i++) {
	// 	anchors[i].addEventListener('click', function () {
	// 		document.body.classList.remove('hamburger-menu-active');
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