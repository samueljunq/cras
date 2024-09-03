/*==================== MOSTRAR MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVER MENU CELULAR ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');s
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ALTERAR CABEÇALHO DE FUNDO ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');

    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
        logo.classList.add('invert-on-scroll');
    } else {
        header.classList.remove('scroll-header');
        logo.classList.remove('invert-on-scroll');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== DESCOBERTA DO SWIPER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

function playPause(){ 
    if (videoFile.paused){
        videoFile.play();
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause(); 
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}
videoButton.addEventListener('click', playPause);

function finalVideo(){
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
videoFile.addEventListener('ended', finalVideo);

/*==================== MOSTRA A ROLAGEM PARA CIMA ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== ROLAR SEÇÕES LINK ATIVO ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== ANIMAÇÃO DE REVELAÇÃO DE ROLAGEM ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
});

sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
});

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
});

/*==================== TEMA ESCURO ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

//Ativa e desativ tema manualmente com o botao
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== MODAL ====================*/
document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        const card = event.target.closest('.card');
        const content = card.querySelector('.extra-content').innerHTML;

        modalBody.innerHTML = content;
        modal.style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', event => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("modalBtn");

var span = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "none";
};

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const moreInfoButtons = document.querySelectorAll('.more-info-btn');

moreInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});

/*==================== ACEITAÇÃO DE COOKIES ====================*/
const cookieMessage = document.getElementById('cookie-message');

const aceitarCookies = document.getElementById('aceitar-cookies');
const recusarCookies = document.getElementById('recusar-cookies');

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

if (getCookie('cookies-aceitos') || getCookie('cookies-recusados')) {
  cookieMessage.style.display = 'none';
} else {
  cookieMessage.style.display = 'block';
}
aceitarCookies.addEventListener('click', () => {
  document.cookie = 'cookies-aceitos=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  cookieMessage.style.display = 'none';
});
recusarCookies.addEventListener('click', () => {
  document.cookie = 'cookies-recusados=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  cookieMessage.style.display = 'none';
});


  