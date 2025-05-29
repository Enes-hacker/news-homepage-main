const mobileMenuBtnEl = document.querySelector('.mobile-menu-btn')

const mobileMenuConEl = document.querySelector('.mobile-menu-icon')

const mobileMenuCloseBtnEl = document.querySelector('.mobile-menu-close-btn')

const navbarEl = document.querySelector('.navbar')

if(navbarEl.classList.contains('active')){
    mobileMenuConEl.src = 'assets/images/icon-menu-close.svg'

    mobileMenuConEl.alt = 'Close menu icon'
    mobileMenuBtnEl.setAttribute('aria-expanded', 'true')
    mobileMenuBtnEl.setAttribute('aria-label', 'Close menu')
} else{
    mobileMenuBtnEl.setAttribute('aria-expanded', 'false')
    mobileMenuBtnEl.setAttribute('aria-label', 'Open menu')
    mobileMenuConEl.src = 'assets/images/icon-menu.svg'
    mobileMenuConEl.alt = 'Open menu icon'
}

mobileMenuBtnEl.addEventListener('click', () => {
    const isMobileOpen = navbarEl.classList.contains('active')

    if(isMobileOpen){
        navbarEl.classList.remove('active')
        mobileMenuBtnEl.setAttribute('aria-expanded', 'false')
        mobileMenuBtnEl.setAttribute('aria-label', 'Open menu')
        mobileMenuConEl.src = 'assets/images/icon-menu.svg'
        navbarEl.setAttribute('aria-hidden', 'true')
    } else{
         navbarEl.classList.add('active')
         mobileMenuBtnEl.setAttribute('aria-expanded', 'true')
         mobileMenuBtnEl.setAttribute('aria-label', 'Close menu')

         mobileMenuConEl.src = 'assets/images/icon-menu-close.svg'
         navbarEl.setAttribute('aria-hidden', 'false')
    }
})