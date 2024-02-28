const obj = {
    //btn
    btndisplayTable :document.getElementById('btn1'),
    btnaddCust :document.getElementById('btn2'),
    btnunbannedTable :document.getElementById('btn3'),
    

    //divs
    welcome : document.getElementById("welcome-msg"),
    displayTable :document.getElementById('display-cut'),
    addCust :document.getElementById('add-cust'),
    unbannedTable :document.getElementById('unbanned'),
    add_cust_next : document.getElementById('add-cust-next'),

    next_step: document.getElementById('next_step'),
    //nav
    nav : document.getElementById("container1"),
    sec1 : document.getElementById("sec1"),

    //submit btn shit
    submit: document.getElementById("submit")
}


//nav bar
obj.nav.addEventListener("mouseover",()=>{
    obj.nav.classList.add("container1-show")
})

obj.nav.addEventListener("mouseleave",()=>{
    obj.nav.classList.remove("container1-show")
})


//constrooll sec
obj.btndisplayTable.addEventListener("click",()=>{
    obj.welcome.classList.add("hide")
    obj.displayTable.classList.add("show")
    obj.addCust.classList.remove("show")
    obj.unbannedTable.classList.remove("show")
})


obj.btnaddCust.addEventListener("click",()=>{
    obj.welcome.classList.add("hide")
    
    obj.displayTable.classList.remove("show")
    obj.addCust.classList.add("show")
    obj.unbannedTable.classList.remove("show")
})

obj.btnunbannedTable.addEventListener("click",()=>{
    obj.welcome.classList.add("hide")
    
    obj.displayTable.classList.remove("show")
    obj.addCust.classList.remove("show")
    obj.unbannedTable.classList.add("show")
})


obj.next_step.addEventListener("click",()=>{
    

    obj.addCust.classList.remove("hide")
    obj.add_cust_next.classList.remove("show")
})
