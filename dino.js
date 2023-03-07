const dino = document.querySelector('#dino');
const cactys = document.querySelector('#cactys');

document.addEventListener("keydown", function (event){
    jump();
});
function jump(){
   if(dino.classList != "jump"){
    dino.classList.add("jump")
   }
   setTimeout(function(){
    dino.classList.remove("jump")
    
   },500)

}
let isAlive = setInterval (function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactysLeft = parseInt(window.getComputedStyle(cactys).getPropertyValue("left"));

    if(cactysLeft < 50 && cactysLeft > 0 && dinoTop >= 140) {
        alert("Geme over");
     }
},10)
