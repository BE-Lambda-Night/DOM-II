// Your code goes here
let logoOnTop = document.getElementsByClassName('logo-heading')
console.log(logoOnTop)
// Since this gets something by className I need a []
logoOnTop[0].addEventListener('mouseenter', e => {
  e.target.style.transform = 'rotateY(3.142rad)'
})

logoOnTop[0].addEventListener('mouseleave', e => {
  console.log('something happened!')
  e.target.style.transform = ''
})

let links = document.querySelectorAll('a')
console.log(links)

links.forEach(function(anchor) {
  anchor.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red'
    event.target.style.transform = "scale(1.2)"
    event.target.style.transition = "transform 0.9s"
  })
  anchor.addEventListener('mouseout', function(event) {
    event.target.style.color = ''
    event.target.style.transform = ""
    event.target.style.transition = "transform 0.5s"
  })
})

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph) {
  let scale = 1
  paragraph.addEventListener('wheel', (e) => {
    e.preventDefault()
    scale += event.deltaY * 0.01
    scale = Math.min(Math.max(0.2, scale), 5)
    paragraph.style.transform = `scale(${scale})`
  })
})

// const homeContainer = document.querySelector('body')
// console.log(homeContainer)
// const middleImages = document.getElementsByClassName('img-content')
// console.log(middleImages)
// homeContainer.addEventListener('wheel', (e) => {
//   middleImages[0].style.transform = 'rotate(90deg)'
// })

const middleImages = document.getElementsByClassName('img-content')
console.log(middleImages)

window.addEventListener('scroll', function(){
  this.console.log('User is scrolling');
  middleImages[0].style.transform = "rotate("+window.pageYOffset+"deg)"
  middleImages[1].style.transform = "rotate(-"+window.pageYOffset+"deg)"
  middleImages[0].style.zIndex = "-1"
  middleImages[1].style.zIndex = "-1"
})


document.addEventListener('keydown', (e) => {
  console.log(` ${e.code}`);
});