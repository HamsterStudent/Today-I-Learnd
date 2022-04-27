window.addEventListener('load',()=>{
    popupEvent();
    topBtnSlide();
    ContentsEffect();
})

class Popup{ //팝업 클래스코딩

    constructor(selectedBtn){
        this.popupName=document.querySelector(selectedBtn)
        this.popupCloseBtn=this.popupName.children[1].children[0];
        this.popupBtn=this.popupName.children[0];
        this.popup=this.popupName.children[1];

        this.initEvent();
    }

    initEvent(){

        this.popupBtn.addEventListener('click',()=>{
            this.popupEvent();
        })
        this.popupCloseBtn.addEventListener('click',()=>{
            this.popupClose();
        })
        
    }

    popupEvent(){
        gsap.set(this.popup, {display:'block'})
        gsap.to(this.popup, {opacity:1, duration:0.3, ease:'power1.out'})
    }
    popupClose(){
            gsap.to(this.popup, {opacity:0, duration:0.3, ease:'power1.out', display:'none'})
    }

}

function popupEvent(){
    let floatWindow1=new Popup('#float_window1')
    let floatWindow2=new Popup('#float_window2')
    let floatWindow3=new Popup('#float_window3')
    let floatWindow4=new Popup('#float_window4')
    let floatWindow5=new Popup('#float_window5')
    let floatWindow6=new Popup('#float_window6')
}

function topBtnSlide(){
    const topBtn=document.querySelector('#top_button')

    let topBtnTop=850;

    window.addEventListener('scroll', windowScroll);
    topBtn.addEventListener('click', quickPageTop);

    function quickPageTop(){
        gsap.to('body,html', {scrollTop:0, duration:0.5, ease:'power1.out'})
    }

    function windowScroll(){
        let scrollHeight=window.pageYOffset;

        gsap.to(topBtn, {top:scrollHeight+topBtnTop, duration:.8, ease:'power1.out'})
    }

}

function ContentsEffect(){
    const mainImg=document.querySelector('#project_web_img');
    const info=document.querySelector('#project_introduce_list')
    const idea=document.querySelector('#project_idea')
    const goal=document.querySelector('#project_goal_list')
    const persona=document.querySelector('#project_persona_wrap')
    const storyboardLi=document.querySelectorAll('#project_storyboard_list>li')
    const styleGuide=document.querySelector('#project_styleguide_wrap')

    initEvent();

    function initEvent(){
        gsap.to(mainImg, {opacity:1, duration:0.8, ease:'power1.out'})
        window.addEventListener('scroll', infoScroll)

        function infoScroll(){
            let scrollHeight=window.pageYOffset;
            if(scrollHeight>800){
                gsap.to(info,{top:0, opacity:1, duration:0.5, ease:'power1.out'})
            }
            if(scrollHeight>1000){
                gsap.to(idea,{top:0, opacity:1, duration:0.5, ease:'power1.out'})
            }
            if(scrollHeight>1500){
                gsap.to(goal,{top:0, opacity:1, duration:0.5, ease:'power1.out'})
            }
            if(scrollHeight>2000){
                gsap.to(persona,{top:0, opacity:1, duration:0.5, ease:'power1.out'})
            }
            if(scrollHeight>3000){
                for(let i=0; i<storyboardLi.length; i++){
                    gsap.to(storyboardLi[i],{top:0, opacity:1, duration:0.3+(0.3*i), ease:'power1.out'})
                }
            }
            if(scrollHeight>5000){
                gsap.to(styleGuide,{top:0, opacity:1, duration:0.5, ease:'power1.out'})
            }
        }
        
    }
}