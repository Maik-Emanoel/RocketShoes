const viewer = document.querySelector('.viewer')
const photos = document.querySelector('.photos')

const img1 = photos.children[0]
const img2 = photos.children[1]
const img3 = photos.children[2]

let show = true;

const btn = document.querySelector('.menuToggle')
const menuSection = document.querySelector('.menuSection')

window.addEventListener('load', () => {
  img1.classList.add('active'),
  viewer.style.background = 'url(./assets/tenis-1-galeria.png) no-repeat center/contain'
})

img1.addEventListener('click', () => {
  if(img1.classList.contains('active') == false){
    img1.classList.add('active')
    img2.classList.remove('active')
    img3.classList.remove('active')

    viewer.style.background = 'url(./assets/tenis-1-galeria.png) no-repeat center/contain'
  }
  
})

img2.addEventListener('click', () => {
  if(img2.classList.contains('active') == false){
    img2.classList.add('active')
    img1.classList.remove('active')
    img3.classList.remove('active')

    viewer.style.background = 'url(./assets/tenis-2-galeria.png) no-repeat center/contain'
  }
})

img3.addEventListener('click', () => {
  if(img3.classList.contains('active') == false){
    img3.classList.add('active')
    img1.classList.remove('active')
    img2.classList.remove('active')

    viewer.style.background = 'url(./assets/tenis-3-galeria.png) no-repeat center/contain'
  }
})

const main = document.querySelector('main')

btn.addEventListener('click', () => {

  document.body.style.overflow = show ? "hidden" : "initial"

  menuSection.classList.toggle('on', show)
  show = !show;

  if(menuSection.classList.contains('on')){
    main.style.visibility = "hidden"
  } else {
    main.style.visibility = 'initial'
  }
})


