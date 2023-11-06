const header= document.querySelector("header")
window.addEventListener('scroll',function() {
    if(this.window.scrollY>0){
        header.style.background='white'
        header.style.boxShadow='0px 0px 10px rgb(0 0 0/5%) '

    }
    else{
        header.style.background='none'
    }
})

let menu=document.querySelector("#menu-icon")
let navmenu=document.querySelector(".navmenu")
no=0
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x')
   if(no==0){
    navmenu.style.right='0px';
    no=no+1;
   }
   else{
    navmenu.style.right='-300px'
    no=no-1;
   }
    
   
})