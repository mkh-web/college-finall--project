const obj = {
    intro : document.querySelector('.intro'),
     logo : document.querySelector('.logo-header'),
    logospan : document.querySelectorAll('.logo'),
}

window.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(()=>{

//هنا يصير انمشين الظهور
        obj.logospan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active')
            }, (idx + 1) * 400)
        })

        
        setTimeout(()=>{
            obj.logospan.forEach((span,idx)=>{
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                    
                },(idx + 1) * 50 );
            })
        },2000)


        setTimeout(()=>{
            obj.intro.style.top="-100vh";
        },2300)


    })
})


