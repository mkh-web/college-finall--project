

const objmain = {
    search_box : document.getElementById("search_box"),
    search_div : document.getElementById("search_div"),

    header_container:document.getElementById("header_container"),
    // btn mobile
    btn_for_moblie : document.getElementById("btn_for_moblie"),
    moblie : document.getElementById("moblie"),
    close_mobile : document.getElementById("close_mobile")

}


objmain.search_box.addEventListener("mouseover",()=>{
    objmain.search_div.classList.add("show")
})

objmain.search_div.addEventListener("mouseleave",()=>{
    objmain.search_div.classList.remove("show")
})


objmain.btn_for_moblie.addEventListener("click",()=>{
    objmain.moblie.classList.add("showno")

})
objmain.close_mobile.addEventListener("click",()=>{
    objmain.moblie.classList.remove("showno")
})






