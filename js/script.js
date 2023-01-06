//save for last if you have time to add a wicked CSS array and randomizer 
let wickedCss = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "heartBeat", "pulse", "rotation",
    "sideToSide", "zoomer", "zoomOut", "spinner", "wiggle", "shake", "pound", "slideUp", "slideDown",
    "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateInLeft", "rotateIn", "bounceIn"];


//create the variable associated with the ID tags
let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");

let changeMeOne = document.getElementById("changeMeOne");
let changeMeTwo = document.getElementById("changeMeTwo");
let changeMeThree = document.getElementById("changeMeThree");
let changeMeFour = document.getElementById("changeMeFour");

console.log(wickedCss);

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * wickedCss.length ));

let cssSelected = Math.floor(Math.random() * wickedCss.length)


btnOne.addEventListener("click", function(){
    // alert("I have been clicked")
    changeMeOne.innerText = "I have now been changed";
})

btnTwo.addEventListener("click", function(){
    changeMeTwo.innerText = "This is change with a class";
    changeMeTwo.className = "fantasyChange"
})

btnThree.addEventListener("click", function(){
    changeMeThree.className = "fantasyChange " + wickedCss[cssSelected];
})