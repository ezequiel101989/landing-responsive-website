/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navmenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click', ()=>{
            navmenu.classList.remove('show-menu')
        })
      };

/*=============== REMOVE MENU MOBILE ===============*/



/*=============== ADD BLUR HEADER ===============*/

window.onload = function() {
    const header = document.getElementById('header')
    // Resto de tu código aquí
    const blurHeader = () =>{
        const header = document.querySelector('.header')
        this.scrollY >= 50 ? header.classList.add('blur-header')
                           : header.classList.remove('blur-header')
    }
    window.addEventListener('scroll',blurHeader)
}

/*=============== SWIPER FAVORITES ===============*/ 

/*=============== SHOW SCROLL UP ===============*/ 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' , scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,// animation repeat


 }) 

 sr.reveal('.home__social, .favorite__container, .sponsor__container, .footer')
 sr.reveal('.home__tittle span:nth-child(1)', {origin: 'left', opacity:1})
 sr.reveal('.home__tittle span:nth-child(3)', {origin: 'right', opacity:1})
 sr.reveal('.home__tooltip, .home__button, .model__button', {origin: 'bottom'})
 sr.reveal('.about__data', {origin: 'left'})
 sr.reveal('.about__img, .model__tooltip', {origin: 'right'})