floating_header = document.querySelector('.floating-header')
body = document.querySelector('body')
header = document.querySelector('.header')
html = document.querySelector('html')
section2_list = document.querySelector('.section-2-list')
section2_btn = document.querySelector('.section-2-btn')
section2 = document.querySelector('.section-2')


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

let i=1
for(i=1; i<21; i++){
imgList = document.createElement('div')
imgList.className = 'section-2-list-img'
imgList.style.background = `url("../textimg/model-${i}.jpg")`
imgList.style.backgroundSize='cover'
section2_list.appendChild(imgList)
imgInventory.push(imgList)

}


//리스트 더보기 버튼

listHeight = section2_list.scrollHeight + 250
function addScroll(e){
if(section2.style.height < (listHeight + 'px')){
  section2.style.height = listHeight + 'px'
  section2_btn.innerText = 'CLOSE'

}

 else if(section2.style.height === (listHeight + 'px')){
    section2.style.height = 1200+'px'
    section2_btn.innerText = 'SEE ALL THE LOOKS'
    console.log('확인')
  }
}

section2_btn.addEventListener('click', addScroll)



console.log(imgInventory)
//이미지 팝업창 띄우기

popup = document.querySelector('.popup')
imgbox = document.querySelector('.imgbox')
closeBtn = document.querySelector('.closebtn')
leftbtn = document.querySelector('.leftbtn')
rightbtn = document.querySelector('.rightbtn')


function popUp(e){

  for(i=0; i<21; i++){
    if(e.target===imgInventory[i]){
      imgbox.style.background=`url("../textimg/model-${i+1}.jpg")`
      popup.style.top=`${html.scrollTop}`+'px'
      imgbox.style.backgroundSize='cover'
      floating_header.classList.add('shadow')
      popup.classList.remove('shadow')
 
      }

      }     
      
  }

    section2.addEventListener('click', popUp)
    popup.addEventListener('click', btnClick)

    function btnClick(e){

      if(e.target===closeBtn){
      popup.classList.add('shadow')}
      floating_header.classList.remove('shadow')

      if(e.target===leftbtn){
        imgbox.style.background= `url("../textimg/model-${j-1}.jpg")`
        imgbox.style.backgroundSize='cover'
      }

      if(e.target===rightbtn){
        imgbox.style.background= `url("../textimg/model-${j+1}.jpg")`
      }
    }













