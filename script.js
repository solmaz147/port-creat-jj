// *


const faBarsButtonu = document.querySelector(".fa-bars")
const closeButtonu = document.getElementsByClassName('fa-xmark')[0]
const overLayDivi = document.querySelector(".overlay")
faBarsButtonu.addEventListener("click", ()=>{
    overLayDivi.style.width="100%"
})
closeButtonu.addEventListener('click',()=>{overLayDivi.style.width=0})




const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {

      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
}
  

);


const swiperK = new Swiper(".myKartSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {

      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
}
  

);

  

  
 /*  <div class="col-12 col-md-4">
  <img class="znak py-3" src="./assets/images/kartlar/birinci.svg" alt="">
  <h2>What can I do for you?</h2>
  <p class="text-muted py-3">Faster, better products that your users love. Here's all the services I provide:</p>
  <ul class="text-dark">
    <li>Design strategy</li>
    <li>Web and mobile app design</li>
    <li>Front-end Development</li>
  </ul>
</div>  */




const melumatlarinYerleseceyiDiv=document.getElementsByClassName("kart-container")[0]
window.addEventListener('DOMContentLoaded',melumatlariGetir)

async function melumatlariGetir(){
  const unvan = 'kartlar.json'
  try{
    const cavab= await fetch(unvan)
    const gelenKartlar = await cavab.json()

  
  gelenKartlar.forEach(function(birKart){
    melumatlarinYerleseceyiDiv.innerHTML+=`<div class="col-12 col-md-4">
    <img class="znak py-3" src=${birKart.wekil} alt="">
    <h2>${birKart.ad}</h2>
    <p class="text-muted py-3">${birKart.melumat}</p>
    <ul class="text-dark">
      <li>${birKart.libir}</li>
      <li>${birKart.liiki}</li>
      <li>${birKart.liuc}</li>
    </ul>
  </div>`
  })  


  }

  catch(err){

  }


  
}

  








