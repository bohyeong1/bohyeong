floating_header = document.querySelector('.floating-header')
body = document.querySelector('body')
header = document.querySelector('.header')
html = document.querySelector('html')
section2_list = document.querySelector('.section-2-list')
section2_btn = document.querySelector('.section-2-btn')
section2 = document.querySelector('.section-2')

//페이지 로드시 동영상 시작






//고정된 매뉴만들기
window.addEventListener('scroll', (e)=>{
  if(html.scrollTop > header.clientHeight){
    floating_header.classList.add('btn-exposure')
  }
  if(html.scrollTop<header.clientHeight){
    floating_header.classList.remove('btn-exposure')
  }
})



//이미지 리스트 생성
imgInventory = []

let i=0
for(i=1; i<21; i++){
imgList = document.createElement('div')
imgList.className = 'section-2-list-img'
imgList.style.background = `url("imgs/model-${i}.jpg")`
imgList.style.backgroundSize='cover'
section2_list.appendChild(imgList)
imgInventory.push(imgList)


}


console.log(imgList.style.background)

//리스트 더보기 버튼

listHeight = section2_list.scrollHeight + 250
function addScroll(e){
if(section2.style.height < (listHeight + 'px')){
  section2.style.height = listHeight + 'px'
  section2_btn.innerText = 'CLOSE'
  section2_btn.classList.add('btn-fix')


}

 else if(section2.style.height === (listHeight + 'px')){
    section2.style.height = 1200+'px'
    section2_btn.innerText = 'SEE ALL THE LOOKS'
    section2_btn.classList.remove('btn-fix')

  }
}

section2_btn.addEventListener('click', addScroll)




//이미지 팝업창 띄우기

popup = document.querySelector('.popup')
imgbox = document.querySelector('.imgbox')
closeBtn = document.querySelector('.closebtn')
leftbtn = document.querySelector('.leftbtn')
rightbtn = document.querySelector('.rightbtn')


let j = 0;

function popUp(e){

  for(i=0; i<21; i++){
    if(e.target===imgInventory[i]){
      j = i + 1;

      imgbox.style.background=`url("imgs/model-${i+1}.jpg")`
      popup.style.top=`${html.scrollTop}`+'px'
      imgbox.style.backgroundSize='cover'
      floating_header.style.display = 'none'
      popup.classList.remove('shadow') 
      
      height = html.scrollTop
      console.log(height)

    
      }
      }     
      
  }

    section2.addEventListener('click', popUp)
    popup.addEventListener('click', btnClick)


   


    function btnClick(e){
      console.log('j', j)
      if(e.target===closeBtn){
      popup.classList.add('shadow')}

      if(e.target===leftbtn){
        j--
        imgbox.style.background= `url("imgs/model-${j}.jpg")`
        imgbox.style.backgroundSize='cover'
        if(j===0){
          imgbox.style.background= `url("imgs/model-1.jpg")`
        imgbox.style.backgroundSize='cover'
        j=1
        }
      }

      if(e.target===rightbtn){
        j++
        imgbox.style.background= `url("imgs/model-${j}.jpg")`
        imgbox.style.backgroundSize='cover'
        if(j===21){
        imgbox.style.background= `url("imgs/model-20.jpg")`
        imgbox.style.backgroundSize='cover'
        j=20
        }
      }
    }

    


    /// 수평 슬라이드를 이용한 페이지네이션

    section3_BtnLeft = document.querySelector('#section-3Left')
    section3_BtnRight = document.querySelector('#section-3Right')
    section3_BtnContainer = document.querySelector('.section-3-btn-container')
    section3_Container = document.querySelector('.section-3-container')
    section3_main = document.querySelector('.section-3-main')
    section3_text = document.querySelector('.section-3-btn-list')

    console.log(section3_Container.clientWidth)
    console.log(section3_Container.scrollLeft)


 


    moveLeft = section3_Container.clientWidth/2


    function moveSlide(e){
      section3_main.classList.add('scroll-behavior')
        if(e.target===section3_BtnLeft){
                section3_main.scrollLeft = 0
                section3_text.innerText = '1/2'
             
        }
        else if(e.target===section3_BtnRight){
                  
                section3_main.scrollLeft = moveLeft
                section3_text.innerText = '2/2'
             
         }

       
    }
   section3_BtnContainer.addEventListener('click', moveSlide)



   let x1, x2, x3
    function moveMouse(e){
      section3_main.classList.remove('scroll-behavior')
        x2 = e.clientX
        let distance = x2-x1
        if(distance<0){
         console.log('확인')
         console.log(distance)
         section3_main.scrollLeft =  -distance}
        else if(distance>0){
          section3_main.scrollLeft = moveLeft-distance

          //    if(section3_main.scrollLeft<moveLeft){

          // }
        } 

    }

    section3_main.addEventListener('mousedown', function(e){
       
        x1 = e.clientX 
        console.log(x1)
        section3_main.addEventListener('mousemove', moveMouse)
           

    })


    function mouseFinish(e){

        section3_main.removeEventListener('mousemove', moveMouse)
        x3 = e.clientX
        let distance = x3 - x1
 
        if(distance<(-moveLeft/2)){
            section3_main.scrollLeft = moveLeft
            section3_text.innerText = '2/2'
        }
        else if(distance<0 && distance>(-moveLeft/2)){
            section3_main.scrollLeft = 0
            section3_text.innerText = '1/2'
        }
        if(distance>moveLeft/2){
            section3_main.scrollLeft = 0
            section3_text.innerText = '1/2'
        }
        else if(distance>0 && distance<moveLeft/2){
            section3_main.scrollLeft = moveLeft
            section3_text.innerText = '2/2'
        }
        
    }

    section3_main.addEventListener('mouseup',mouseFinish)
    section3_main.addEventListener('mouseleave', mouseFinish)





    //헤더 네비게이션 메뉴 클릭시 화면 스크롤

    btn1s = document.querySelectorAll('#btn1')
    btn2s = document.querySelectorAll('#btn2')
    btn3s = document.querySelectorAll('#btn3')
    btn4s = document.querySelectorAll('#btn4')
    footer = document.querySelector('.footer')

  
    
    floating_header.addEventListener('click',browserScroll)

    function browserScroll(e){
      if(e.target===btn1s[0]||e.target===btn1s[1]){
        header.scrollIntoView(true)
        console.log('확인')
      }
      else if(e.target===btn2s[0]||e.target===btn2s[1]){
        section2.scrollIntoView(true)
      }
      else if(e.target===btn3s[0]||e.target===btn3s[1]){
        footer.scrollIntoView(true)
      }
      else if(e.target===btn4s[0]||e.target===btn4s[1]){
        footer.scrollIntoView(true)
      }

    }

    header.addEventListener('click',browserScroll)












