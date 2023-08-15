const navBtn = document.querySelector('.nav__btn')
const navLinks = document.querySelector('.nav__links')
const headerArrowDown = document.querySelector('.header__arrow-down')
const footerIcons = Array.from(document.querySelectorAll('.footer__icon'))
isMobileNavbarOpen = false

function openMobileNavbar() {
    navLinks.classList.add('nav__links_mobile')
    headerArrowDown.classList.add('header__arrow-down_hidden')
    setTimeout(() => {
        isMobileNavbarOpen = true
    }, 100);
}

function closeMobileNavbar() {
    navLinks.classList.remove('nav__links_mobile')
    headerArrowDown.classList.remove('header__arrow-down_hidden')
    isMobileNavbarOpen = false
}

window.addEventListener('resize', (event) => {
    if (window.innerWidth >= 680) {
        closeMobileNavbar()
    }
})

navBtn.addEventListener('click', (event) => {
    if (navLinks.classList.contains('nav__links_mobile')) {
        closeMobileNavbar()
    } else {
        openMobileNavbar()
    }
}) 

window.addEventListener('click', (event) => {
    if (isMobileNavbarOpen 
        && !(event.target.classList.contains('nav__links')) 
        && !(event.target.classList.contains('nav__link'))
    )
        closeMobileNavbar()
    }
)

for (const icon of footerIcons) {
    const socialName = icon.alt.match(/\w+(?=\s)/)

    icon.addEventListener('mouseover', () => {
        icon.src = `../images/icon-${socialName}-hover.svg` 
    }) 

    icon.addEventListener('mouseout', () => {
        icon.src = `../images/icon-${socialName}.svg` 
    })
}