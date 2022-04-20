$(function(){


  jq('.infos .size span').text('크기(cm) : '+jq('.infos .size span').text());

  jq('#buy-wrap-btn').on('click',openPopup);
  jq('#close-popup').on('click',closePopup);

  function openPopup(){

    console.log('noti')
    jq('#buy-wrap-btn').css('display','none');
    jq('.bottom-popup-area').css('display','block');
  }

  function closePopup(){
    jq('#buy-wrap-btn').css('display','block');
    jq('.bottom-popup-area').css('display','none');
  }

  function actionToggle(){
    if(document.querySelector('.buying-toggle').style.display == "block"){
      const buyingAction = document.querySelector('.btnSubmit').onclick;
      jq('.buying-action-button-fixed').off();
      jq('.buying-action-button-fixed').click(function(e){
        submitTextEvent();
        buyingAction();
      });

      document.querySelector('.buying-action-button-fixed').classList.add('toggled');
      document.querySelector('.bottom-action-area').classList.add('toggled');

    }else{
      jq('.buying-action-button-fixed').off();
      jq('.buying-action-button-fixed').click(function(e){
        jq('.buying-toggle').toggle();
        actionToggle();
      });

      document.querySelector('.buying-action-button-fixed').classList.remove('toggled');
      document.querySelector('.bottom-action-area').classList.remove('toggled');
    }
  }





  jq('.toggle-button').click(function(el){
    const toggle = el.currentTarget.attributes.toggle.value;
    const arrow = el.currentTarget.children[0];
    jq('#'+toggle).toggle();
    if(document.querySelector('#'+toggle).style.display == ""){
          arrow.style.transform = "rotate(0)";
      }else{
          arrow.style.transform = "rotate(-180deg)";
      }
  });

  jq('#buying-action-button').click(function(e){
    jq('.buying-toggle').toggle();
    actionToggle();
  });

  jq('.sticker-preview-close-btn').click(function(e){
    jq('.buying-toggle').toggle();
    actionToggle();
  });

  jq('.buying-action-button-fixed').click(function(e){
    jq('.buying-toggle').toggle();
    actionToggle();
  });




  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //장바구니 버튼 활성화

  const cartAction = Function(document.querySelector('#actionCart').attributes['onclick'].value);
  document.querySelector('.basket-action-button-fixed').addEventListener('click',submitTextEvent);
  document.querySelector('.basket-action-button-fixed').addEventListener('click',cartAction);

  //qna페이지 펴기

    if(document.URL.indexOf('#use_qna') > -1){
      jq('#prdQnA').toggle();
      if(document.querySelector('#prdQnA').style.display == "block"){
            document.querySelector('.qna-arrow').style.transform = "rotate(180deg)";
        }else{
            document.querySelector('.qna-arrow').style.transform = "rotate(180deg)";
        }
    }

    document.readyStateChange = function(){
    if(document.readyState = "complete"){
        window.scrollTo(0,100000)
      }
    }

//리뷰 카운트
  document.querySelector('.review-count').innerText = Number(document.querySelector('tr.xans-record-:nth-child(3) > td:nth-child(2) > span:nth-child(1)').innerText)+"+";

//짱구 식기세트 특수 로직

 if(document.querySelector('.name').innerText.indexOf('짱구는 못말려 도자기 밥그릇 식기세트') > -1){
  document.querySelector('.review-count').innerText = Number(document.querySelector('tr.xans-record-:nth-child(3) > td:nth-child(2) > span:nth-child(1)').innerText)*4+"+";
  document.querySelector('.white-horse-delivery-dec').style.display = 'block';
  }

//리뷰보기
$(".review-action-button-fixed").click(function (){
  $('html, body').animate({
      scrollTop: $(".review-anchor").offset().top - 60
  }, 500);
});

//이벤트 버튼
$(".event-button").click(function (){
  $('html, body').animate({
      scrollTop: $("#event-anchor").offset().top - 700
  }, 500);
});

//커스텀 페이징

function loadPaginate(type, num){

  let boardType;

  if(type == "review")
    {
      boardType = 'page_4'
    }else {
      boardType = 'page_6'
    }

  const currentUrl = document.URL;

  jq.ajax({
    url: document.URL.split('?')[0]+'?'+"product_no="+query['product_no']+'&'+"cate_no="+query['cate_no']+'&'+boardType+'='+num,
    type:"GET",
    dataType:"html"
  }).done(function(res){
    dom = new DOMParser().parseFromString(res,'text/html');
    boards = dom.querySelector('#review-container');

    document.querySelector('#review-container').remove();
    document.querySelector('#prdReview').prepend(boards);
    reloadReviews();
    $('html, body').animate({
        scrollTop: $(".review-anchor").offset().top-60
    }, 500);
  });
}


function paginate(el){

  const type = el.attributes.type.value;
  const id = Number(el.attributes.id.value.replace('b',''));
  const page = Number(el.innerText);

  //넘버 업데이트
  document.querySelector('.'+type+'-paginate'+' .num.this').classList.remove('this');


  if(page < 3){
    resetNavigate(type);
    document.querySelectorAll('.'+type+'-paginate'+' .num').forEach(function(el){
      if(Number(el.innerText) == page){
        el.classList.add('this');
      }
    })
  }else{
    document.querySelectorAll('.'+type+'-paginate'+' .num').forEach(function(el){
      const elId = Number(el.attributes.id.value.replace('b',''));
      el.innerText = Number(el.innerText) + (id-3);
      if(Number(el.innerText) == page){
        el.classList.add('this');
      }
    });
  }

  loadPaginate(type,page);

}

function resetNavigate(type){

  document.querySelectorAll('.'+type+'-paginate'+' .num').forEach(function(el){
    el.innerText = el.attributes.id.value.replace('b','');
  });

}



function navigate(el){
  const type = el.attributes.type.value;
  const direction = el.classList[0];
  const target = document.querySelector('.'+type+'-paginate'+' .'+direction+'.num');

  paginate(target);
}

document.querySelectorAll('.custom-paginate .num').forEach(function(eventEl){
  eventEl.addEventListener('click', function(e){
    paginate(e.target);
  });
});

document.querySelectorAll('.custom-paginate .navi').forEach(function(eventEl){
  eventEl.addEventListener('click', function(e){
    navigate(e.target);
  });
});

//출시예정 상품


console.log('test');

if(document.querySelector('#soldout-area').className.indexOf('displaynone') == -1 && document.querySelector('#btn_restock') != null && document.querySelector('.infos tbody tr:last-child td span').innerText != "출시예정상품"){
  let restock = document.querySelector('#btn_restock')
  restock.remove();
  restock.children[0].remove();
  restock.innerText = '재입고 알림받기';
  restock.classList.add('new-restock')
  document.querySelector('.info').append(restock);

  document.querySelector('.form-box').children[0].innerText = 'SOLD OUT';
  document.querySelector('.bottom-action-area .buying-action-button-fixed').style.backgroundColor = 'rgb(70 70 70)'

  jq('.buying-action-button-fixed').off();



}

if(document.querySelector('.infos tbody tr:last-child td span').innerText == "출시예정상품" && document.querySelector('#btn_restock') != null){

  try{
    document.querySelector('#contents').classList.add('comming-soon');

    restockButton = document.querySelector('#btn_restock');
    restockButton.remove();
    restockButton.children[0].remove();
    restockText = document.createElement('div');
    restockText.classList.add('restock-text');
    restockText.innerText = '상품출시알림 받기';
    restockButton.append(restockText);
    document.querySelector('.prdDesc').append(restockButton);

    document.querySelector('.bottom-action-area').style.display = "none";
    document.querySelector('.comming-soon-area').style.display = "block";

    document.querySelector('#span_product_price_text').style.display = "none"
    document.querySelector('tr.xans-record-:nth-child(2)').style.display = "none"

    jq('.comming-soon-button').on('click',function(){
      jq('#btn_restock').trigger('onclick');
    });


  }catch(e){
    console.log(e);
  }
}

if(document.querySelector('.infos tbody tr:last-child td span').innerText == "출시예정상품" && document.querySelector('#btn_restock') == null){
    document.querySelector('.infos tbody tr:last-child td span').remove();
    document.querySelector('#span_product_price_text').innerText = "공개예정"
}

// 리뷰 없으면 닫기

if(document.querySelector('#prdReview .nodata') != null){
  document.querySelector('#prdReview').style.display = 'none';
  document.querySelector('.custom-paginate').style.display = 'none';
  console.log('no-review')
}

//짱식 전용 코드


if(document.querySelector('.name').innerText == "짱구는 못말려 도자기 밥그릇 식기세트"){
  document.querySelector('.recommand').style.display = "block";
}


if(document.querySelector('.name').innerText.indexOf('짱구') > -1){
  document.querySelector('.detail-moving-card-box').style.display = 'block'
}


//관련상품 공개예정

document.querySelectorAll('#page-sanrio .prdList_box .price').forEach(function(el){
    if(el.innerText == "10원"){
        el.innerText = "공개예정"
    }
})


//예약구매
/*
function reserveActivate(bool, date){
  if(bool == true){
    document.querySelector('.form-box-buy').innerText = "예약구매";
    document.querySelector('.form-box-confirm').innerText = "예약구매 하기";
    document.querySelector('.notification').style.display = 'block';
    document.querySelector('.freight-date').innerText = date;
    document.querySelector('#NaverChk_Button').remove();
  }
}

reserveActivate(getReservedBool(),getFreightDate(getReservedName()));
*/

//옵션 관련

if(document.querySelector('#product_option_id1') == null){
   document.querySelector('.option-area').style.display = "flex"
   document.querySelector('.price').innerText = document.querySelector('#span_product_price_text').innerText;
   document.querySelector('.quantity td').style.display = "inline-block"

   console.log('no option')
}

if(document.querySelector('#span_product_price_text').innerText == '10원'){
  document.querySelector('#span_product_price_text').innerText = "공개예정"
  document.querySelector('#span_product_price_text').style.display= 'none'
  console.log('qwer')
}


});

(() => {

  stickerPreviewEffect();
  stickerReset();
  stickerDetail();
  fontColorChange();
  character();

  // submitTextEvent();


})();

function submitTextEvent(){

  var inputName = getInputEvent();
  var inputProduct = getProductName();
  var inputFont = getFontStyle();
  var inputColor = getFontColor();
  var inputList = [ inputProduct, inputName, inputFont, inputColor ]


  productName();


  function productName(){
    var name;
    if(inputProduct == '시나모롤'){

      var newProduct = object();

      if(sessionStorage.cn){
        cn = JSON.parse(sessionStorage.getItem('cn'));
      }else {
        cn = [];
      }
      cn.push(newProduct)
      sessionStorage.setItem('cn', JSON.stringify(cn));

      var orderList = sessionStorage.getItem('cn');
      console.log('orderList: ', JSON.parse(orderList));

    }else if (inputProduct == '쿠로미') {

      var newProduct = object();

      if(sessionStorage.ku){
        ku = JSON.parse(sessionStorage.getItem('ku'));
      }else {
        ku = [];
      }
      ku.push(newProduct)
      sessionStorage.setItem('ku', JSON.stringify(ku));

      var orderList = sessionStorage.getItem('ku');
      console.log('orderList: ', JSON.parse(orderList));

    }
  }


  function object(){
    var newProduct = new Object();

    newProduct.name = inputName
    newProduct.font = inputFont
    newProduct.color = inputColor

    return newProduct;
  }



  function getInputEvent(){

    var nameText = document.getElementById('name-text').value;

    return nameText;

  }

  function getProductName(){

    var currentUrl = window.location.href.split("=")
    var currentUrlNum = currentUrl[1]
    let currentUrlName;

    if(currentUrlNum == "3586&cate_no"){
      return currentUrlName = '쿠로미'
    }else if (currentUrlNum == "3587&cate_no") {
      return currentUrlName = '시나모롤'
    }

    return currentUrlName;

  }

  function getFontStyle(){

    var engFontStyle = selectFont();

    let selectedFont;

    if(engFontStyle == "dunggeunmo"){
      return selectedFontStyle = "둥근모꼴"
    }else if (engFontStyle == "binggrae") {
      return selectedFontStyle = "빙그레체"
    }else {
      return selectedFontStyle = "기본폰트"
    }
    return selectedFont
  }

  function getFontColor(){
    const nameText = document.querySelectorAll('.name-sticker-text');

    let selectedColor

    if(nameText[0].style.color == "rgb(0, 0, 0)"){
      return selectedColor = "검정색"
    }else if (nameText[0].style.color == "rgb(103, 66, 57)") {
      return selectedColor = "갈색"
    }else if (nameText[0].style.color == "rgb(96, 104, 169)") {
      return selectedColor = "파란색"
    }else {
      return selectedColor = "검정색"
    }
    return selectedColor;
  }


}









//네임스티커 캐릭터별 분류
function character(){
  const mmUrl = document.location.href.indexOf("detail-printing.html?product_no=3505");
  const cnUrl = document.location.href.indexOf("detail-printing.html?product_no=3587");
  const pnUrl = document.location.href.indexOf("detail-printing.html?product_no=3508");
  const pcUrl = document.location.href.indexOf("detail-printing.html?product_no=3507");
  const hkUrl = document.location.href.indexOf("detail-printing.html?product_no=3503");
  const pageBasicImg = document.querySelectorAll('.sticker-basic-img')
  const pageMiniImg = document.querySelectorAll('.sticker-mini-img')
  const pageBigImg = document.querySelectorAll('.sticker-big-img')
  const pageApprovalImg = document.querySelector('.sticker-approval-img')
  // const approval = document.querySelector()


  if(mmUrl > -1){
    document.addEventListener('DOMContentLoaded', ()=>{
      for(const item of pageBasicImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "MM/MM")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageMiniImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "MM/MM")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageBigImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "MM/MM")

        item.style.backgroundImage = replaceImg;
      }

      const selectApprovalImg = window.getComputedStyle(pageApprovalImg).getPropertyValue('background-image');
      const replaceImg = selectApprovalImg.replace("KU/KU", "MM/MM")

      pageApprovalImg.style.backgroundImage = replaceImg;

    })
  }else if(cnUrl > -1){
    document.addEventListener('DOMContentLoaded', ()=>{
      for(const item of pageBasicImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "CN/CN")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageMiniImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "CN/CN")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageBigImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "CN/CN")

        item.style.backgroundImage = replaceImg;
      }

      const selectApprovalImg = window.getComputedStyle(pageApprovalImg).getPropertyValue('background-image');
      const replaceImg = selectApprovalImg.replace("KU/KU", "CN/CN")

      pageApprovalImg.style.backgroundImage = replaceImg;

    })
  }else if(pnUrl > -1) {
    document.addEventListener('DOMContentLoaded', ()=>{
      for(const item of pageBasicImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "PN/PN")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageMiniImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "PN/PN")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageBigImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "PN/PN")

        item.style.backgroundImage = replaceImg;
      }

      const selectApprovalImg = window.getComputedStyle(pageApprovalImg).getPropertyValue('background-image');
      const replaceImg = selectApprovalImg.replace("KU/KU", "PN/PN")

      pageApprovalImg.style.backgroundImage = replaceImg;

    })
  }else if (pcUrl > -1) {
    document.addEventListener('DOMContentLoaded', ()=>{
      for(const item of pageBasicImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "PC/PC")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageMiniImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "PC/PC")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageBigImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "PC/PC")

        item.style.backgroundImage = replaceImg;
      }

      const selectApprovalImg = window.getComputedStyle(pageApprovalImg).getPropertyValue('background-image');
      const replaceImg = selectApprovalImg.replace("KU/KU", "PC/PC")

      pageApprovalImg.style.backgroundImage = replaceImg;

    })
  }else if (hkUrl > -1) {
    document.addEventListener('DOMContentLoaded', ()=>{
      for(const item of pageBasicImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "HK/HK")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageMiniImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "HK/HK")

        item.style.backgroundImage = replaceImg;
      }

      for(const item of pageBigImg){
        const selectedImg = imgValue(item)
        const replaceImg = selectedImg.replace("KU/KU", "HK/HK")

        item.style.backgroundImage = replaceImg;
      }

      const selectApprovalImg = window.getComputedStyle(pageApprovalImg).getPropertyValue('background-image');
      const replaceImg = selectApprovalImg.replace("KU/KU", "HK/HK")

      pageApprovalImg.style.backgroundImage = replaceImg;

    })
  }

  function imgValue(item){
    return window.getComputedStyle(item).getPropertyValue('background-image');

  }






}

//네임스티커 입력
function typeText(){
  const nameWrap = document.querySelector('.sticker-preview-wrap');
  const productSize = document.querySelector('.sticker-size-wrap');
  const name = document.getElementById('name-text').value;

  document.querySelectorAll('.name-sticker-text').forEach(function(el,i){
    el.innerText = name;
  })

}
//네임스티커 디테일 팝업
function stickerPopup(){
  const stickerPreview = document.querySelector('.sticker-preview')
  const detailWrap = document.querySelector('.sticker-preview-detail-wrap');

  stickerPreview.addEventListener('click', ()=>{
    detailWrap.style.display = 'block'
  })
  detailWrap.addEventListener('click', ()=>{
    detailWrap.style.display = 'none'
  })
}
//네임스티커 셀렉트박스
function selectFont(){
  let selectOption = document.getElementById("select-font");
  const nameText = document.querySelectorAll('.name-sticker-text');
  // const detailText = document.querySelector('.detail-text');
  const miniText = document.querySelectorAll('.sticker-mini-img > .name-sticker-type > .name-sticker-text')
  const basicText = document.querySelectorAll('.sticker-basic-img > .name-sticker-type > .name-sticker-text')
  const miniTextWrap = document.querySelectorAll('.sticker-mini-img > .name-sticker-type')

  const modalBox = document.querySelectorAll('.modal-box > .name-sticker-type > .name-sticker-text')


  selectOption = selectOption.options[selectOption.selectedIndex].value

  // console.log(selectOption)

  if(selectOption == "dunggeunmo"){
    for(const item of nameText){
      item.style.fontFamily = "dungGeunMo"
    }
  }else if(selectOption == "bazzi"){
    for(const item of nameText){
      item.style.fontFamily = "Bazzi"
    }
  }else if(selectOption == "binggrae"){
    for(const item of nameText){
      item.style.fontFamily = "Binggrae"
    }
  }else if(selectOption == "minhye"){
    for(const item of nameText){
      item.style.fontFamily = "Minhye"
    }
  }else{
    for(const item of nameText){
      item.style.fontFamily = "'Apple SD Gothic Neo','Noto Sans KR',sans-serif"
    }
    for(const item of miniText){
      item.style.fontFamily = "'Apple SD Gothic Neo','Noto Sans KR',sans-serif"
    }
  }

  return selectOption

}
//네임스티커 폰트 컬러
function fontColorChange(){
  const blackColorChip = document.querySelector('.font-black');
  const brownColorChip = document.querySelector('.font-brown');
  const blueColorChip = document.querySelector('.font-blue');
  const nameText = document.querySelectorAll('.name-sticker-text');

  let selectedColor;

  brownColorChip.addEventListener('click', ()=>{
    for(const item of nameText){
      item.style.color = "#674239"
    }
  })

  blackColorChip.addEventListener('click', ()=>{
    for(const item of nameText){
      item.style.color = "#000"
    }
  })

  blueColorChip.addEventListener('click', ()=>{
    for(const item of nameText){
      item.style.color = "#6068a9"
    }
  })


  for(const item of nameText){
    if(item.style.color == "#674239"){
      let selectedColor = '갈색'
    }else if (item.style.color == "#000") {
      let selectedColor = '검은색'
    }else if (item.style.color == "#6068a9") {
      let selectedColor = '하늘색'
    }
  }

  return selectedColor;

}

//스티커 이미지 높이 조정
function stickerPreviewEffect(){
  const stickerPreview = document.querySelector('.sticker-preview')
  const buyBtn = document.querySelector('.buying-action-button-fixed')

  window.addEventListener('resize', ()=>{
    stickerPreview.style.height = stickerPreview.clientWidth * 1.4 + "px"
  })
}

function stickerReset(){
  const inputBox = document.getElementById('name-text');
  let stickerWidth = window.innerWidth * 0.85;

  //네임스티커 width크기 구하기

  document.querySelector('.sticker-preview').style.width = stickerWidth + "px"
  document.querySelector('.sticker-preview').style.height = stickerWidth * 1.4 + "px"

  //네임스티커 셀렉트박스 초기화
  document.getElementById('select-font').value = "selectfont";

  //네임스티커 인풋박스 초기화
  inputBox.value = null;

}


//스티커 이미지 자세히보기
function stickerDetail(){

  const stickerBasicImg = document.querySelectorAll('.sticker-basic-img');

  const stickerBasicLeft = document.querySelectorAll('.sticker-basic-left>.sticker-basic-img');
  const stickerBasicRight = document.querySelectorAll('.sticker-basic-right>.sticker-basic-img');

  const stickerMiniImg = document.querySelectorAll('.sticker-mini-img');
  const stickerBigImg = document.querySelectorAll('.sticker-big-img');
  const stickerText = document.querySelectorAll('.name-sticker-text');
  const stickerType = document.querySelectorAll('.name-sticker-type');

  const modalWrap = document.querySelector('.sticker-modal');
  const modalImgBack = document.querySelector('.sticker-modal-back');
  const modalBox = document.querySelector('.sticker-modal-box');
  const modalText = document.querySelector('.sticker-modal-box > .name-sticker-type')

  for(const item of stickerBasicLeft){
    item.addEventListener('click', () => {
      const selectedImg = window.getComputedStyle(item).getPropertyValue('background');
      const selectedAlignment = window.getComputedStyle(item).getPropertyValue('text-align');
      const selectedText = item.innerText;

      console.log(selectedText)

      modalWrap.style.display = 'block'
      modalBox.style.background = selectedImg;
      modalBox.style.height = "80px"
      modalBox.style.width = "200px"
      modalBox.style.left = "calc(50% - 100px)"

      modalText.style.textAlign = "center";
      modalText.style.width = "110px";
      modalText.style.height = "29px";
      modalText.style.top = "calc(50% - 16.5px)";
      modalText.style.left = "calc(50% - 37px)";


    })
  }

  for(const item of stickerBasicRight){
    item.addEventListener('click', () => {
      const selectedImg = window.getComputedStyle(item).getPropertyValue('background');
      const selectedText = item.innerText;

      console.log(selectedText)

      modalWrap.style.display = 'block'
      modalBox.style.background = selectedImg;
      modalBox.style.height = "80px"
      modalBox.style.width = "200px"
      modalBox.style.left = "calc(50% - 100px)"
      modalBox.style.textAlign = "end"

      modalText.style.textAlign = "center"
      modalText.style.width = "110px";
      modalText.style.height = "29px";
      modalText.style.top = "calc(50% - 16px)";
      modalText.style.left = "calc(50% - 55px)";

    })
  }


  for(const item of stickerMiniImg){
    item.addEventListener('click', () => {
      const selectedImg = window.getComputedStyle(item).getPropertyValue('background');
      const selectedText = item.innerText;


      modalWrap.style.display = 'block'
      modalBox.style.background = selectedImg;
      modalBox.style.height = "80px"
      modalBox.style.width = "200px"
      modalBox.style.left = "calc(50% - 100px)"

      modalText.style.textAlign = "center"
      modalText.style.width = "110px";
      modalText.style.height = "29px";
      modalText.style.top = "calc(50% - 20px)";
      modalText.style.left = "calc(50% - 36px)";
    })
  }

  for(const item of stickerBigImg){
    item.addEventListener('click', () => {
      const selectedImg = window.getComputedStyle(item).getPropertyValue('background');
      const selectedText = item.innerText;


      modalWrap.style.display = 'block'
      modalBox.style.background = selectedImg;
      modalBox.style.height = "100px"
      modalBox.style.width = "150px"
      modalBox.style.left = "calc(50% - 75px)"

      modalText.style.textAlign = "center"
      modalText.style.width = "110px";
      modalText.style.height = "29px";
      modalText.style.top = "calc(50% - 9.5px)";
      modalText.style.left = "calc(50% - 55px)";

    })
  }


  modalImgBack.addEventListener('click', ()=>{
    modalWrap.style.display = 'none';
  })

}
