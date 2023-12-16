

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


// Change Header Color while Scrolling because originaly opacity was low

document.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})


// Smooth scroll to about page

function smoothScroll() {
    var targetElement = document.getElementById("about");

    if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

document.querySelector("li.close").onclick = smoothScroll();




const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        };
    });
});
const hiddenElements = document.querySelectorAll("section");
hiddenElements.forEach((el)=>observer.observe(el));





