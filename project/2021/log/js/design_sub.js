window.addEventListener('load',()=>{
    contentsScroll();
    topBtnSlide();
})

function contentsScroll(){
    const contentLi=document.querySelectorAll('#contents_list>li')

    let contentsLength=contentLi.length

    gsap.to(contentLi[0],{ top:0, opacity:1, duration:0.5, ease:'power1.out'})
    window.addEventListener('scroll',scrollEffect)

    function scrollEffect(){

        let scrollHeight=window.pageYOffset;
        for(var i=1; i<contentsLength; i++){
            if(scrollHeight>890*i){
                gsap.to(contentLi[i],{top:0, opacity:1, duration:0.5, ease:'power1.out'})
            }
        }
    }

}

function topBtnSlide(){
    const topBtn=document.querySelector('#top_button')
    
    topBtn.addEventListener('click', quickPageTop);

    function quickPageTop(){
        gsap.to('body,html', {scrollTop:0, duration:0.5, ease:'power1.out'})
    }
}