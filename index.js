//grab menu class and give it an open or closed option

const hamburgerBtn = document.querySelector('hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu')
const mainMenu = document.querySelector('menu')



function showMenu() {
    var x = document.getElementById('main-menu');
    if (x.style.display = 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}


hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('show-menu');
})




/*
hamburgerBtn.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        mainMenuToggle.setAttribute('aria-expanded', 'false');

        mainMenu.style.display = 'none';
    } else {
        mainMenu.setAttribute('aria-expanded', 'true');

        menu.style.display = 'block';
    }

    hamburgerBtn.classList.toggle('active');

    mainMenu.classList.toggle('open');
})






/*
// hamburgerBtn.classList.toggle('active');

//    mainMenu.classList.toggle('open'); 