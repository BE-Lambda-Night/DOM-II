// Your code goes here
let logoOnTop = document.getElementsByClassName('logo-heading')
console.log(logoOnTop)
// Since this gets something by className I need a [i]
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
  //stop navigation items from refreshing the page
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
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

paragraphs.forEach(function (paragraph) {
  paragraph.addEventListener('auxclick', () => {
    paragraph.style.backgroundColor = "dodgerblue"
  })
})

let body = document.querySelector('body')
console.log(body)
links[0].addEventListener('click', () => {
  body.style.backgroundColor = 'red'
})
links[1].addEventListener('click', () => {
  body.style.backgroundColor = 'orange'
})
links[2].addEventListener('click', () => {
  body.style.backgroundColor = 'lightblue'
})
links[3].addEventListener('click', () => {
  body.style.backgroundColor = ''
})

const middleImages = document.getElementsByClassName('img-content')
console.log(middleImages)

window.addEventListener('scroll', function(e){
  e.stopPropagation();
  middleImages[0].style.transform = "rotate("+window.pageYOffset+"deg)"
  middleImages[1].style.transform = "rotate(-"+window.pageYOffset+"deg)"
  middleImages[0].style.zIndex = "-1"
  middleImages[1].style.zIndex = "-1"
})

document.addEventListener('keydown', (e) => {
  console.log(` ${e.code}`);
});

let headers = document.querySelectorAll('h2, h4')
console.log(headers)
headers.forEach(function (header) {
  header.addEventListener('copy', (e) => {
    window.alert("Something has been copied! Beware of plagiarism!");
    header.style.color = 'purple'
  })
})

let funBusImage = document.querySelector('img')
console.log(funBusImage)
funBusImage.addEventListener('drag', (event) => {
  console.log("CTA image is being dragged!")
})

window.addEventListener('resize', function(){
  this.console.log('Random screen-sizing: ' + Math.random())
})

window.addEventListener('load', function(){
  alert('Loading...Loading...Loading.....Loaded :)')
})

