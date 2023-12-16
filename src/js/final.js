

// Mobile Responsive Nav Bar
const menu = document.getElementById("menu");
menu.addEventListener("click",function(){
    document.querySelector(".header__sidebar").style.display = "flex";
})



const close= document.querySelector(".close");
close.addEventListener("click",function(){
    const side= document.querySelector(".header__sidebar");
    side.style.display = "none";
})


// Change Header whilw Scrolling

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})





