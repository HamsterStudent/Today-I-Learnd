(() => {

  popupEvent();

})();

//팝업 이벤트
  function popupEvent(){
    const popup = document.querySelector('.popup-wrap');
    const closeBtn = document.querySelector('.popup-close');
    const notTodayBtn = document.querySelector('.popup-not-today');
    const background = document.querySelector('.popup-background');
    const popupTopClose = document.querySelector('.popup-top-close')

    function initEvent(){

      popupTopClose.addEventListener('click', popupInactive)
      closeBtn.addEventListener('click', popupInactive)
      background.addEventListener('click', popupInactive)
      notTodayBtn.addEventListener('click', ()=>{
        popupInactive();
        popupDisable();
      })

      if(window.localStorage.getItem('disable') == null){
        popupActive();
      }else{
        popupInactive();
      }
    }

    function popupActive(){
      popup.style.display = "block"
      background.style.display = "block"
      scrollLock();
    }

    function popupInactive(){
      popup.style.display = "none"
      background.style.display = "none"
      scrollUnlock();
    }


    function popupDisable(){
      window.localStorage.setItem('disable', 1);
      popupClose();
    }

    function scrollLock(){
      document.body.classList.add('hidden')
    }

    function scrollUnlock(){
      document.body.classList.remove('hidden')
    }


    initEvent();
  }
