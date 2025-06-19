//intention of below code: if menu is hidden on button click,
//change style to visible on click.
//else if visible on click, make hidden.

var button = document.querySelector('button.hamburger-btn');
var buttonElement = document.getElementById('button');


button.onclick = function() {

if(button.style.visibility = 'hidden'){
    button.setAttribute('aria-expanded', 'true')
    button.style.visibility = 'visible'
   } else{ button.style.visibility = 'hidden'

   }

   console.log("click");
};





/*
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