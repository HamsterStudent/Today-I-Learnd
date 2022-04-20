(() => {
  villageSize();
  clickModal();

  const elem = document.getElementById('panzoom-element')
  const panzoom = Panzoom(elem, {
    maxScale: 5,
    contain: 'outside',
    startScale: 0.5,
    cursor: "url('/asset/ducky-universe/cursor/cute-duckie.cur'), auto"
  });

  document.querySelector('.zoomin-btn').addEventListener('click', panzoom.zoomIn)
  document.querySelector('.zoomout-btn').addEventListener('click', panzoom.zoomOut)
  document.querySelector('.right-btn').addEventListener('click', panzoom.reset)


  elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)


  console.log(panzoom)



})();

function villageSize() {
  const villageWrap = document.querySelector('.village-wrap')
  window.addEventListener('load', villageResize)
  window.addEventListener('resize', villageResize)

  function villageResize(){
    villageWrap.style.height = villageWrap.clientWidth * 0.711111111111111 + "px"
  }

}

function clickModal(){
  const eachPlace = document.querySelectorAll('.place')
  const modal = document.querySelector('.modal')
  const modalBack = document.querySelector('.modal-back')
  const closeBtn = document.querySelector('.modal-close')

  for(const item of eachPlace){
    item.addEventListener('click', modalPopup)
  }
  closeBtn.addEventListener('click', modalClose)
  modalBack.addEventListener('click', modalClose)

  function modalPopup(){

    if(modal.style.display == 'block'){
      return false;
    }else{
      modal.style.display = 'block'
      modalBack.style.display = 'block'
    }

  }


  function modalClose(){
    modal.style.display = 'none'
    modalBack.style.display = 'none'
  }


}

function fetchPage(name){
  const modal = document.querySelector('.modal')
  const modalContent = document.querySelector('.modal-content')

  fetch(name).then(function(response){
    response.text().then(function(text){
    modalContent.innerHTML = text;

    // 모달포지션조정
    modal.style.top = "calc(50% - " + modalContent.clientHeight/2 + "px )"
    modal.style.left = "calc(50% - " + modalContent.clientWidth/2 + "px )"

    })
  })

}
