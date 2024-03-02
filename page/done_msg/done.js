const obj = {
    click_to_sucess : document.getElementById('click_to_sucess'),
    sucess : document.getElementById('sucess'),
}

obj.click_to_sucess.addEventListener("click",()=>{
    obj.sucess.classList.remove("hide")

    setTimeout(()=> {
        obj.sucess.classList.add("hide");
      }, 5000);
})


