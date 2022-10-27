// hamburger 
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
// end of hamburger

// Hero animation
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;


var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});


var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();

//services
let psdiv = document.querySelector('#ps')
psdiv.addEventListener('click',function(){
  window.location.href="./ps.html";
})

let xboxdiv =document.querySelector('#xbox')
xboxdiv.addEventListener('click',function(){
  window.location.href="./xbox.html";
})

let pcdiv =document.querySelector('#pc')
pcdiv.addEventListener('click',function(){
  window.location.href="./pc.html";
})

//contact
let wpcontact = document.querySelector('#whatsappcontact')
wpcontact.addEventListener('click',function(){
  window.location.href="https://api.whatsapp.com/send?phone=96176355160&text=Welcome%20to%20Zafshop!%20Thank%20you%20for%20getting%20in%20touch%20with%20us.%20Our%20representative%20will%20contact%20you%20ASAP.";
})

let emailcontact = document.querySelector('#emailcontact')
  emailcontact.addEventListener('click',function(){
  window.open('mailto:itszafshop@gmail.com');
})

let instacontact = document.querySelector('#instacontact')
instacontact.addEventListener('click',function(){
  console.log("bang");
  window.location.href="https://www.instagram.com/itszafshop/";
})