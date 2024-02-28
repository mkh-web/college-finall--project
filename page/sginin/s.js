const obj1={
    forget : document.getElementById('forgetstuff'),
    forgetbtn : document.getElementById('forgetbtn'),
    blurbody : document.getElementById('blureffect'),
    return : document.getElementById('return')
}

obj1.forgetbtn.addEventListener('click',()=>{
    console.log("f")
    obj1.forget.classList.add("show")
    obj1.blurbody.classList.add("blureffect")
})


obj1.return.addEventListener('click',()=>{
    
    obj1.forget.classList.remove("show")
    obj1.blurbody.classList.remove("blureffect")
})