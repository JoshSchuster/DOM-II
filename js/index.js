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

//8th event - dblclick on "Let's Go" changed to "LET's GO!!!!!!!!!!", mouseout changed back
const letsGoH2 = document.querySelector('.content-section h2')
letsGoH2.addEventListener('dblclick', event => event.target.textContent = 'LET\'S GO!!!!!!!!!!!!')
letsGoH2.addEventListener('mouseout', event => event.target.textContent = 'Let\'s Go')

//9th event - contextmenu on "Adventure Awaits" backgroundColor changed to yellow, moueout changed back
const adventureAwaitsH2 = document.querySelectorAll('h2')
adventureAwaitsH2[2].addEventListener('contextmenu', event => event.target.style.backgroundColor = 'yellow')
adventureAwaitsH2[2].addEventListener('mouseout', event => event.target.style.backgroundColor = 'white')

//10th event - dragstart on first boat img border changed, mouseout changed back
const firstBoatImg = document.querySelector('.content-section.inverse-content img')
firstBoatImg.addEventListener('dragstart', event => event.target.style.border = '.4rem solid red')
firstBoatImg.addEventListener('mouseout', event => event.target.style.border = 'none')

//This does not fire when nav item "Blog" is clicked because of stopPropagation() within the event listener tied to navBlog[2]
const head = document.querySelector('header')
head.addEventListener('click', event => {
    console.log('You clicked within the header')
})

//stopPropagation() for "Blog"
const navItems = document.querySelectorAll('a')
navItems[2].addEventListener('click', event => {
    event.stopPropagation()
    console.log('You clicked the Blog nav menu item')
})

//stop nav items from refreshing the page using preventDefault()
//Home
navItems[0].addEventListener('click', event => {
    event.preventDefault();
})
//About Us
navItems[1].addEventListener('click', event => {
    event.preventDefault();
})
//Blog
navItems[2].addEventListener('click', event => {
    event.preventDefault();
})
//Contact
navItems[3].addEventListener('click', event => {
    event.preventDefault();
})