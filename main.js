const searchBtn = document.querySelector('.searchContainer button')
const inputText = document.querySelector('#search')
const logo = document.querySelector('.logo')

const menuSection = document.querySelector('.menuSection')
const ul = document.querySelector('.menuSection ul')
const menuBtn = document.querySelector('.menuToggle')

const photos = document.querySelector('.photos')
const viewer = document.querySelector('.viewer')
const allImg = photos.querySelectorAll('div img')
const span = photos.querySelectorAll('div span')

// add class "on" on input text and button
searchBtn.addEventListener('click', addMenuExpanded)

function addMenuExpanded() {
    searchBtn.classList.add('on')
    inputText.classList.add('on')
    inputText.focus()
    
    if(searchBtn.classList.contains('on') & !menuSection.classList.contains('on')) {
        ul.style.visibility = 'hidden'
    }

    if(window.matchMedia("(max-width:550px)").matches) {
        logo.style.display = 'none'
        menuBtn.style.display = 'none'
    }
}

// remove class 'on' to leave of the inputText focus
inputText.onblur = function removeClassOn() {
    searchBtn.classList.remove('on')
    inputText.classList.remove('on')

    ul.style.visibility = 'initial'

    if(window.matchMedia("(max-width:550px)").matches) {
        logo.style.display = 'flex'
        menuBtn.style.display = 'flex'
    }
}

// menuSection activated
menuBtn.addEventListener('click', function activateMenuExpanded() {
    menuSection.classList.toggle('on')
})


// feature to add .photos img to viewer
const allImgArr = Array.from(allImg)
const spanArr = Array.from(span)

photos.addEventListener('click', (e) => {
    const bgConfig = 'no-repeat center/100%'

    if(e.target == allImgArr[0]) {
        viewer.style.background= `url(./assets/tenis-1-galeria.png)` + bgConfig
        spanArr[0].classList.add('active')
    } else {
        spanArr[0].classList.remove('active')
    }

    if(e.target == allImgArr[1]) {
        viewer.style.background= `url(./assets/tenis-2-galeria.png)` + bgConfig
        spanArr[1].classList.add('active')
    } else {
        spanArr[1].classList.remove('active')
    }

    if(e.target == allImgArr[2]) {
        viewer.style.background= `url(./assets/tenis-3-galeria.png)` + bgConfig
        spanArr[2].classList.toggle('active')
    } else {
        spanArr[2].classList.remove('active')
    }
})
