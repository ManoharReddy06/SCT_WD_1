let pages = document.querySelector('.pages');
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let navbar = document.querySelector('.navbar');

pages.addEventListener('scroll',(e) => {
    if(home.offsetTop <= e.target.scrollTop+navbar.offsetHeight && e.target.scrollTop+navbar.offsetHeight < about.offsetTop) {
        navbar.style.backgroundColor = ' rgb(0, 129, 165)';
    }else if(about.offsetTop <= e.target.scrollTop+navbar.offsetHeight && e.target.scrollTop+navbar.offsetHeight < contact.offsetTop) {
        navbar.style.backgroundColor = ' rgb(177, 156, 0)';
    }else if(e.target.scrollTop+navbar.offsetHeight >= contact.offsetTop) {
        navbar.style.backgroundColor = 'rgb(134, 0, 143)';
    }
})