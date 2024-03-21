
box = document.querySelector('.box')
html = document.querySelector('html')

function removeBackground(){
    if(html.scrollTop>1000){
        box.style.display = 'none'
        console.log(html.scrollTop)
    }
    if(html.scrollTop<1000){
        box.style.display = ''
    }
    
}

window.addEventListener('scroll', removeBackground)