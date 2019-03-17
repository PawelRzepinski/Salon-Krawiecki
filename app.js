const burgerBtn = document.querySelector(".burgerBtn");
const burgerDivs = document.querySelectorAll(".burgerBtn div");
const menu = document.querySelector(".sideMenu");
const $menuLinks = $(".menu a");

console.log($menuLinks);


function toggleMenu () {
    menu.classList.toggle("showMenu");
}

burgerBtn.addEventListener("click",function(){
    toggleMenu();
    burgerDivs.forEach(function(x){
        x.classList.toggle("whiteBtn");
    })
});




var images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));

function getViewportHeight() {
    var a = document.documentElement.clientHeight, b = window.innerHeight;
    return a < b ? b : a;
}

function getViewportScroll() {
    if(typeof window.scrollY != 'undefined') {
        return window.scrollY;
    }
    if(typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    var doc = document.documentElement;
    doc = doc.clientHeight ? doc : document.body;
    return doc.scrollTop;
}


function doParallax() {
    var el, elOffset, elHeight,
        offset = getViewportScroll(),
        vHeight = getViewportHeight();
 
    for(var i in images) {
        el = images[i];
        elOffset = el.offsetTop;
        elHeight = el.offsetHeight;
 
        if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }
 
        el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
    }
}


//  płynne przewijanie do kotwicy jQuery
$(function(){

    $menuLinks.on("click", toggleMenu);

    function scroll(e) {

        var href = $(this).attr('href');
    
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 800);
    
        location.hash = href;
    
    };
    
    $('a[href^="#"]').click(scroll);

})