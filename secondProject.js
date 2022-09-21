window.addEventListener("scroll", ()=>{
    var header = document.querySelector("header")
    header.classList.toggle("sticky", scrollY > 1)
})

let menuBar = document.querySelector('.menu')


function showMenu() {
   menuBar.classList.toggle("menuShow")
}