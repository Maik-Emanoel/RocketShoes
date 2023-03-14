const searchBtn = document.querySelector('.searchContainer button')
const inputText = document.querySelector('#search')
const logo = document.querySelector('.logo')

const menuSection = document.querySelector('.menuSection')
const ul = document.querySelector('.menuSection ul')
const menuBtn = document.querySelector('.menuToggle')

const photos = document.querySelector('.photos')
const viewer = document.querySelector('.viewer')
const allImg = photos.querySelectorAll('div img')
const spans = photos.querySelectorAll('div span')

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

const bgConfig = 'no-repeat center/100%'
const numberBg = 3

allImg.forEach((photo, i) => {
    photo.addEventListener('click', () => {
        viewer.style.background = `url(./assets/tenis-${i + 1}-galeria.png)` + bgConfig

        const span = spans[i]
        const activeIndex = Array.from(spans).indexOf(span)
        span.classList.add('active')
        spans.forEach((otherSpan, index) => {
            if (index !== activeIndex) {
                otherSpan.classList.remove('active')
            }
            
        })
    })
})

