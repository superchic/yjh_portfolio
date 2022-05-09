/* main.js */
window.onload=function(){
    //마우스 따라 움직이는 강아지
    const dog = document.querySelector(".content2 > section > .dog_mousemove");
    const content2 = document.querySelector(".content2");
    content2.addEventListener("mousemove",(e)=>{
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        dog.style.left= mouseX+10 + "px";
        dog.style.top= mouseY+10 + "px";
    });

    //마우스 따라 움직이는 손(코드 쥐고 있는)
    const code = document.querySelector(".content3 > section > .code");
    const content3 = document.querySelector(".content3");
    content3.addEventListener("mousemove",(e)=>{
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        code.style.left= mouseX+5 + "px";
        code.style.top= mouseY+5 + "px";
    });
 
   //애니메이션 타이밍
   
    window.addEventListener("scroll",function(){
        const div = document.querySelector("#container > div");
        const divHt = div.offsetHeight;
        console.log(divHt)
        const scroll = document.querySelector("html").scrollTop;
        const ball = document.querySelector(".content4 > section > .ball");
        console.log(scroll)
        const pc1 = document.querySelector(".mockup > .pc_1 > .monitor1 > span");
        const pc2 = document.querySelector(".mockup > .pc_2 > .monitor2 > span");
        const pc3 = document.querySelector(".mockup > .pc_3 > .monitor3 > span");
        const appMockup = document.querySelector(".frame_app > .moving_zone > span");
        
        //삼성 목업
        if(scroll>=divHt*2&&scroll<divHt*3){
            pc1.classList.add("on");
            pc2.classList.add("on");
            pc3.classList.add("on");
        }else{
            pc1.classList.remove("on");
            pc2.classList.remove("on");
            pc3.classList.remove("on");
        }
         // CJ ONE 공애니메이션
        if(scroll>=divHt*3&&scroll<divHt*4){
            ball.classList.add("on");
        }else{
            ball.classList.remove("on");
        }

        //앱코딩 목업
        if(scroll>=divHt*4&&scroll<divHt*5){
            appMockup.classList.add("on");
        }else{
            appMockup.classList.remove("on");
        }
        
    });

    //마우스 따라 움직이는 손 
    const hand = document.querySelector(".content5 > section > .hand");
    const content5 = document.querySelector(".content5");
    content5.addEventListener("mousemove",(e)=>{
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        hand.style.left= mouseX+3 + "px";
        hand.style.top= mouseY+3 + "px";
    });

    //치킨
    const chicken = document.querySelector(".content6 > section > .chicken");
    const content6 = document.querySelector(".content6");
    content6.addEventListener("mousemove",(e)=>{
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        chicken.style.left= mouseX+5 + "px";
        chicken.style.top= mouseY+5 + "px";
    });

    //미완성앱 열었을 때
    const miwanseong  = document.querySelector(".content5 > section > .dustpan");
    miwanseong.onclick = function(){
        window.open("https://superchic.github.io/miwanseong_app/","miwanseong","width=375px,height=812px,left=0,top=0,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,resizeable=no");
    }


    //리액트 카카오톡 열었을 때
    const kakao  = document.querySelector(".content8 > section > .react");
    kakao.onclick = function(){
        window.open("https://superchic.github.io/kakao_app/","kakao talk","width=428px,height=926px,left=0,top=0,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,resizeable=no");
    }

    //TOP버튼
    const btnTop = document.querySelector('.btn_top');
    btnTop.addEventListener('click',function(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    
} 