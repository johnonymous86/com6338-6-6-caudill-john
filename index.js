


//variables

var button = document.querySelector("button.hamburger-btn");
var menu = document.getElementById("main-menu");
var links = document.getElementById('main-menu');
var navigation = document.getElementsByClassName("menu");
var container = document.getElementsByClassName("hamburger-btn");
var hamMenu = document.getElementsByClassName("hamburger-menu")


//below sets click event to open hamburger menu

button.onclick = function () {
if (menu.classList.contains("show-menu")) {
links.classList.toggle('visible');    
menu.setAttribute("aria-expanded", "true");
menu.classList.remove('show-menu');
links.style.visibility = ('visible');
button.setAttribute("aria-expanded", "true");


//below should close/open with esc button and focus hamburger and menu items
//set aria expanded to false when collapsed
document.onkeyup = function(e) {
    if (e.key === 'Escape')
        close.hamMenu()
    if (
    e.key === 'Tab' && 
    menu.contains(document.activeElement)) {
    closeBtn.focus();
    }
}
} else {
menu.classList.add('show-menu');
menu.setAttribute("aria-expanded", "false");
}
};

//below should close menu if clicking outside menu
menu.onclick = function(e) {
    if (!menu.contains(e.target)) {
        closeMenu ()
    }
};


/*var navigation = document.getElementsByClassName("menu");
document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !button.contains(e.target)) {
    navigation.classList.contains('hidden');
    }
}
);


/*keyboard navigation options
document.onkeyup = function(e) {
    if (e.key === 'Escape')
        closeMenu()
    if (
    e.key === 'Tab' && 
    !menu.contains(document.activeElement)) {
closeBtn.focus()
    }
}

menu.onclick = function(e) {
    if (!menu.contains(e.target)) {
        closeMenu ()
    }
}


/*

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.contains('hidden');
    }
}
);
Nothing below here has worked thus far

var hamburgerBtn = document.querySelector('button.hambuger-btn')

hamburgerBtn.onclick() 
    hamburgerBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
    ariaExpanded.classList.toggle('true');





const hamburgerBtn = document.querySelector('button.hamburger-btn');
const hamburgerMenu = document.querySelector('ul.hamburger-menu')
const mainMenu = document.querySelector('nav.menu')
const ariaExpanded = document.querySelector('button.aria-expanded')

hamburgerBtn.addEventListener('click', () =>{
    hamburgerBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
    ariaExpanded.classList.toggle('true');
});


function showMenu() {
    var x = document.getElementById('button.hamburger-btn');
    if (x.style.display = 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}


/*hamburgerBtn.addEventListener('click', () => {
    const isExpanded = mainMenuToggle.getAttribute('aria-expanded') === 'true';


    if (isExpanded) {
        mainMenuToggle.setAttribute('aria-expanded', 'false');

        mainMenu.style.display = 'none';
    } else {
        mainMenu.setAttribute('aria-expanded', 'true');

        mainMenu.style.display = 'block';
    }

    hamburgerBtn.classList.toggle('active');

    mainMenu.classList.toggle('open');
})




/*
hamburgerBtn.classList.toggle('show-menu');

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

*/