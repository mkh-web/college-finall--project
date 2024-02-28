const obj = {
    nav : document.getElementById("container1"),
    sec1 : document.getElementById("sec1"),
}

obj.nav.addEventListener("mouseover",()=>{
    obj.nav.classList.add("container1-show")
})

obj.nav.addEventListener("mouseleave",()=>{
    obj.nav.classList.remove("container1-show")
})