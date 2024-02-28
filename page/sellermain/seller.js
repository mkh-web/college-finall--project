const obj2 = {
    btnlist : document.getElementById('openlist'),
    bodylist : document.getElementById('bodylist'),
    close : document.getElementById('close')
}

obj2.btnlist.addEventListener("click",()=>{
    obj2.bodylist.classList.add("show")
})

obj2.close.addEventListener("click",()=>{
    obj2.bodylist.classList.remove("show")
})