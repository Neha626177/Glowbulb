const onBulb = document.querySelector("#onBtn");
const offBulb = document.querySelector("#offBtn");
const head = document.querySelector('.head')


onBulb.addEventListener('click',()=>{
    var bulb = document.querySelector(".bulb");
      bulb.src = "bulbon.png";
    head.innerHTML = 'Can You turn off the Bulb?'   ; 

})



offBulb.addEventListener("click", () => {
      var bulb = document.querySelector(".bulb");
      bulb.src = "bulboff.png";
  head.innerHTML = "Can You turn On the Bulb? ";
});

