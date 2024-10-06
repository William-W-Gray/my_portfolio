let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle(active);
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove(active);
}

const typed = new Typed('.multiple-text', {
    strings: ['<i>I am a</i> Frontend Developer.', 'a Backend Developer.', 'UI/UX Designer', 'Web Designer' ],
    typeSpeed: 80,
    backspeed:80,
    Delay:1200,
    loop: true,

  });