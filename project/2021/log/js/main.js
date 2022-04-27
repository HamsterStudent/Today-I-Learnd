window.addEventListener('load',()=>{
    horizontalScroll()
    mainScrollSlide()
    homeBtnSlide();
    
})

function horizontalScroll(){
    const allWrap=document.querySelector('#all_wrap')
    const contentsWrap=document.querySelector('#contents_wrap')

    gsap.set(allWrap,{height:window.innerHeight})
    gsap.set(contentsWrap,{height:window.innerHeight})

    window.addEventListener('scroll',windowScroll)

    function windowScroll(){
        let scrollHeight=window.pageYOffset
        // alert(scrollHeight)
        gsap.set(contentsWrap,{left:-scrollHeight})
    }
}

function mainScrollSlide(){
    const menu=document.querySelectorAll('#header_list>li')
    const contents=document.querySelectorAll('.contents')

    let windowHeight=window.innerWidth;

    let scrollHeight=0;
    let menuClickNum=0;
    let endY;

    let selectedMenu=menu[0];
    selectedMenu.classList.add('selected')
    
    initEvent();

    function initEvent(){
        for(const item of menu){
            item.addEventListener('click',menuClick);
        }
         window.addEventListener('scroll',windowScroll)
    }

    function menuClick(){
        menuClickNum=getIndex(this)
        // alert(menuClickNum)
        endY=windowHeight*menuClickNum;

        scrollSlide(menuClickNum)
        menuActivate(menuClickNum)
    }

    function getIndex(num){
        let selectedIndex=0;
        while((num=num.previousElementSibling)!=null){
            selectedIndex++
        }
        return selectedIndex
    }

    function scrollSlide(num){
        if(selectedMenu!=menu[num]){
            gsap.to("body,html", {duration:1, scrollTop:endY});
        }
    }

    function menuActivate(num){
        if(selectedMenu!=null && selectedMenu!=menu[num]){
            selectedMenu.classList.remove('selected')
        }

        if(selectedMenu!=menu[num]){
            selectedMenu=menu[num];
            selectedMenu.classList.add('selected')
        }
    }

    function windowScroll(){

        scrollHeight=window.pageYOffset;
        // alert(scrollHeight)
        if(scrollHeight>=windowHeight/2 && scrollHeight<windowHeight*1.5){
            menuClickNum=1
        }else if(scrollHeight>windowHeight/1.5 && scrollHeight<windowHeight*3){
            menuClickNum=2
        }else if(scrollHeight>windowHeight){
            menuClickNum=3
        }else{
            menuClickNum=0
        }

        menuActivate(menuClickNum)

    }
}

function homeBtnSlide(){
    const homeBtn=document.querySelector('#homebtn')
    
    homeBtn.addEventListener('click', quickPageTop);

    function quickPageTop(){
        gsap.to('body,html', {scrollTop:0, duration:0.5, ease:'power1.out'})
    }
}