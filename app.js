const burgerBtn = document.querySelector(".burgerBtn");
const burgerDivs = document.querySelectorAll(".burgerBtn div");
const menu = document.querySelector(".sideMenu");

console.log(burgerDivs);


burgerBtn.addEventListener("click",function(){
    menu.classList.toggle("showMenu");
    burgerDivs.forEach(function(x){
        x.classList.toggle("whiteBtn");
    })
});
