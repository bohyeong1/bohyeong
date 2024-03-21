//마우스 커서 변경
const docuE = document.documentElement;
const newCursor = document.querySelector('.circleCursor');
let posX = 0;
let posY = 0;

function moveCursor(e){
  posX = e.clientX + 'px'
  posY = e.clientY + 'px'
  newCursor.style.left = posX
  newCursor.style.top = posY
}


document.addEventListener('mousemove',moveCursor)
document.addEventListener('mousedown',()=>{
  newCursor.style.width = 10+'px'
  newCursor.style.height = 10+'px'
  newCursor.style.transition = 0.2+'s'
})
document.addEventListener('mouseup',()=>{
  newCursor.style.width = 20+'px'
  newCursor.style.height = 20+'px'
  newCursor.style.transition = 'none'
})


// 드롭다운 메뉴 구현
const nav = document.querySelector('.nav')
const body = document.querySelector('body')
const header = document.querySelector('header')

const eaglesMenu = ['HISTORY', '야구장 오는 길', '마스코트']
const playerMenu = ['선수단', '선수기록']
const menuMap = {
  EAGLES : eaglesMenu,
  PLAYER : playerMenu
}
let submenu

function createDropdown(menus){
  const ul = document.createElement('div')
  ul.className = 'sub-menu'
  for(menu of menus){
    ul.innerHTML += `<span>${menu}</span>`
  }
  return ul
}



function showSubmenu(e){
  

  if(e.target.className === 'menu'){
    const currentSubmenu = e.target.parentElement.querySelector('.sub-menu') 
    if(submenu) submenu.remove()

    if(currentSubmenu !== submenu){ 
      submenu = createDropdown(menuMap[e.target.innerText])
      header.appendChild(submenu)
      a = e.target
    }
  }
}

nav.addEventListener('mouseover', showSubmenu)
header.addEventListener('mouseleave', ()=>{submenu.remove()
console.log('확인')})

//페이지이동

//photo-section - 이미지 에니메이션


wrapper = document.querySelector('.wrapper')
container = document.querySelector('.container')
img_boxs = document.querySelectorAll('.imgbox')
html = document.querySelector('html')
img = document.querySelectorAll('img')

function resetDeg(){
  if(html.scrollTop>680&&html.scrollTop<1500){
    for(let i=0; i<8; i++){
    img_boxs[i].style.transform='rotate(0deg)'
    img_boxs[i].style.left = `${i*20}rem`
    img_boxs[i].style.top = '0'
    img_boxs[i].style.height = '100%'
  
  
}
  }
  if(html.scrollTop>2000||html.scrollTop<400){
    for(let i=0; i<8; i++){
    img_boxs[i].style.transform=`rotate(${i*5}deg)`
    img_boxs[i].style.left = `4rem`
    img_boxs[i].style.height = '60%'
  }}
}

function displayImg(){
 

}
window.addEventListener('scroll', resetDeg)
window.addEventListener('scroll', displayImg)

//photo-section - 이미지 호버시 확대
function hover(e){
 
  for(let i=0; i<8; i++){
    if(e.target===img[i]){
   
  img[i].style.transform = 'scale(1.3)'}}
}

function hoverOut(){
  for(let i=0; i<8; i++){
    // console.log('확인')
    img[i].style.transform='scale(1)'
  }
}

container.addEventListener('mouseover',hover)
container.addEventListener('mouseout',hoverOut)

//photo-section - 슬라이드

  






function moveContainer(){
 
  }

window.addEventListener('scroll',moveContainer)



//네비게이터 버튼
navBtn = document.querySelector('.navigator')

function navHover(){
   navBtn.style.background = 'red'
}
function navHoverOut(){
  navBtn.style.background = 'white'
}

navBtn.addEventListener('mouseover', navHover)
navBtn.addEventListener('mouseout', navHoverOut)



