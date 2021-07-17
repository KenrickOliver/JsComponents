const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixedNav)

function fixedNav() {
    // console.log(window.scrollY, nav.offsetHeight)
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('nav-active')
    } else {
        nav.classList.remove('nav-active')
    }
}

