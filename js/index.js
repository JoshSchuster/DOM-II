// Your code goes here

//1st event - mousedown on "About Us" red, mouseup on "About Us" black
const aboutUsNav = document.querySelector('a:nth-of-type(2)')
aboutUsNav.addEventListener('mousedown', event => event.target.style.color = 'red')
aboutUsNav.addEventListener('mouseup', event => event.target.style.color = 'black')