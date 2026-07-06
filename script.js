const burger = document.querySelector('.burger')
const headerNav = document.querySelector('.header-nav')

burger.addEventListener('click', () => {
    headerNav.classList.toggle('hidden')
})