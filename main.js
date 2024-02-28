

const objmain = {
    search_box : document.getElementById("search_box"),
    search_div : document.getElementById("search_div"),

    header_container:document.getElementById("header_container")
}


objmain.search_box.addEventListener("mouseover",()=>{
    objmain.search_div.classList.add("show")
})
objmain.search_div.addEventListener("mouseleave",()=>{
    objmain.search_div.classList.remove("show")
})





