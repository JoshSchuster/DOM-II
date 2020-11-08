// Your code goes here

//1st event - mousedown on "About Us" red, mouseup on "About Us" black
const aboutUsNav = document.querySelector('a:nth-of-type(2)')
aboutUsNav.addEventListener('mousedown', event => event.target.style.color = 'red')
aboutUsNav.addEventListener('mouseup', event => event.target.style.color = 'black')

//2nd event - mouseover on "Fun Bus" font size changed to 6rem, mouseout changed back to 4rem
const funBusH1 = document.querySelector('h1')
funBusH1.addEventListener('mouseover', event => event.target.style.fontSize = '6rem')
funBusH1.addEventListener('mouseout', event => event.target.style.fontSize = '4rem')