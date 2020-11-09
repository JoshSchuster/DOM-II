// Your code goes here

//1st & 2nd event - mousedown on "About Us" red, mouseup on "About Us" black
const aboutUsNav = document.querySelector('a:nth-of-type(2)')
aboutUsNav.addEventListener('mousedown', event => event.target.style.color = 'red')
aboutUsNav.addEventListener('mouseup', event => event.target.style.color = 'black')

//3rd & 4th event - mouseover on "Fun Bus" font size changed to 6rem, mouseout changed back to 4rem
const funBusH1 = document.querySelector('h1')
funBusH1.addEventListener('mouseover', event => event.target.style.fontSize = '6rem')
funBusH1.addEventListener('mouseout', event => event.target.style.fontSize = '4rem')

//5th & 6th event - mouseenter on "Welcome To Fun Bus!" fontWeight bold, mouseleave changed back to normal
const welcomeToFunBusH2 = document.querySelector('.intro h2')
welcomeToFunBusH2.addEventListener('mouseenter', event => event.target.style.fontWeight = 'bolder')
welcomeToFunBusH2.addEventListener('mouseleave', event => event.target.style.fontWeight = 'normal')

//7th event - click change bus image, mouseout change back to larger image
const busImg = document.querySelector('.intro img')
busImg.addEventListener('click', event => event.target.src = 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/68832327_2327160754069243_6673518883149709312_n.png?_nc_cat=102&ccb=2&_nc_sid=85a577&_nc_ohc=O90xh-YMIXkAX-F3rjp&_nc_ht=scontent-msp1-1.xx&oh=bfd9304db018355564d62b953eff85bd&oe=5FD14205')
busImg.addEventListener('mouseout', event => event.target.src = 'https://toppng.com/uploads/preview/bus-toy-sand-beach-yellow-11569851115kozomyrjfc.jpg')