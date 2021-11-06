whiteBorder = document.querySelector(".gchoice_27_27_1")
blackBorder = document.querySelector(".gchoice_27_27_0")
blackAndWhiteBorder = document.querySelector(".gchoice_27_27_2")

Photos = document.getElementsByClassName(".gpfup__file")

whiteBorder.addEventListener("click",()=>{
   for(i=0;i<Photos.length;i++){
    Photos[i].classList.remove("blackAndWhiteBorder")
    Photos[i].classList.remove("blackborder")
    Photos[i].classList.add("whiteborder")
   }
})

blackBorder.addEventListener("click",()=>{
   for(i=0;i<Photos.length;i++){
    Photos[i].classList.remove("blackAndWhiteBorder")
    Photos[i].classList.remove("whiteborder")
    Photos[i].classList.add("blackborder")
    }
})

blackAndWhiteBorder.addEventListener("click",()=>{
   for(i=0;i<Photos.length;i++){
    Photos[i].classList.remove("blackborder")
    Photos[i].classList.remove("whiteborder")
    Photos[i].classList.add("blackAndWhiteBorder")
   }
})
