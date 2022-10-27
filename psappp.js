
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