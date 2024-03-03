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
            }, )
        })

        
        setTimeout(()=>{
            obj.logospan.forEach((span,idx)=>{
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                    
                },(idx + 1) * 50 );
            })
        },)


        setTimeout(()=>{
            obj.intro.style.top="-100vh";
        },)


    })
})


