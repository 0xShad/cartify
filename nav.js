
export function navBar () {
    const nav = document.querySelector('.navbar')

document.querySelector('.burger')
.addEventListener('click', () => {
    nav.classList.remove('hidden')
    nav.classList.add('smallNav')
})

document.querySelector('.burger-close')
.addEventListener('click', () => {
    nav.classList.add('hidden')
    nav.classList.remove('smallNav')
})

}