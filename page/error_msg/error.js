const obj = {
    click_to_error : document.getElementById('click_to_error'),
    error : document.getElementById('error'),
}

obj.click_to_error.addEventListener("click",()=>{
    obj.error.classList.remove("hide")

    setTimeout(()=> {
        obj.error.classList.add("hide");
      }, 5000);
})


