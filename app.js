const body = document.querySelector('body');

// open & close menu
const menuToggles = document.querySelectorAll('.menuToggle');
const closeButtons = document.querySelectorAll('.close-btn');

for(let i = 0; i< menuToggles.length; i++){
    menuToggles[i].addEventListener('click', () => {
        openMobileMenu();
    })
}

function openMobileMenu()
{
    // console.log('mobile menu toggle');
    body.classList.add('openMobileMenu');
}

for(let i = 0; i< closeButtons.length; i++){
    closeButtons[i].addEventListener('click', () => {
        closeMobileMenu();
    })
}

function closeMobileMenu()
{
    // console.log('closing mobile menu');
    body.classList.remove('openMobileMenu');
}

