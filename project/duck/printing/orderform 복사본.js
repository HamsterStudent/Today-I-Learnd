$(()=>{

    insertValue();
    orderEdit();

    document.querySelector('#topArea a:nth-child(2)').remove();
    dom = document.createElement('h2');
    dom.classList.add('order-title');
    dom.innerText = '주문 결제';
    document.querySelector('#menu-button').after(dom);

    document.querySelector('.xans-order-form .boardWrite .payment span:first-child').classList.add('selected-method');

    function paymethodSelector(e){
        e.stopPropagation();
        document.querySelector('.selected-method').classList.remove('selected-method');
        e.target.parentElement.parentElement.classList.add('selected-method');
        console.log(e.target.parentElement);
    }

    document.querySelectorAll('.xans-order-form .boardWrite .payment span label').forEach(function(payment){
      console.log(payment, 'ㅇㅇ')
      payment.addEventListener('click',paymethodSelector);
    });




  if(getReservedBool() == true){

    document.querySelectorAll('.ec-base-label').forEach(function(el){
      el.style.display = "none";
    });

    document.querySelectorAll('.method-detail').forEach(function(el){
      el.style.display = "none";
    });

    document.querySelectorAll('.ec-base-label')[0].style.display = "block";
    document.querySelector('#payment_input_cash').style.display = "block";

    let span = document.createElement('div');
    span.innerText = "*예약 구매 상품이 장바구니에 포함되어 있습니다. 예약구매는 무통장 입금만 가능합니다."
    span.classList.add('payment-notice');
    document.querySelectorAll('.ec-base-label')[0].append(span);
    document.querySelector('.detail-wrapper').style.paddingTop = '26px';
    document.querySelector('.payment-notice').style.fontSize = '14px';
    document.querySelector('.payment-notice').style.paddingTop = '7px';
    document.querySelector('#btn_payment').innerText = '예약구매'

    document.querySelectorAll('input[name="addr_paymethod"]').forEach(function(el){
    	el.checked = false
    });
    document.querySelector('#addr_paymethod0').checked = true;

    document.querySelector('#payment_input_cash').style.display = 'block';


    console.log('excuted 2');
  }


  // 스티커 추가정보
  function insertValue(){
    const informationTh = document.querySelectorAll('.information-input')

    for(const item of informationTh){
      const inputBox = item.nextElementSibling.children[0]
      item.style.fontSize = "15px"

      function valueType(){
        var valueType;
        if(item.textContent.match("쿠로미")){
          return valueType = sessionStorage.getItem('ku');
        }else if (item.textContent.match("시나모롤")){
          return valueType = sessionStorage.getItem('cn');
        }
        return valueType;
      }

      var valueItem = valueType();
      var information = JSON.parse(valueItem)[0]
      var orderInfo = information.name + ' / ' + information.font + ' / ' + information.color

      if(JSON.parse(valueItem).length > 1){
        var orderList = JSON.parse(valueItem)[0].name + " 외 " + (JSON.parse(valueItem).length - 1) + "건";
        inputBox.setAttribute('value', orderList)
      }else{
        inputBox.setAttribute('value', orderInfo)
      }
      inputBox.setAttribute('disabled', "")

    }
  }




  function orderEdit(){
    const editBtn = document.querySelectorAll('.edit-info')
    const editModal = document.querySelector('.plus-info-modal')
    const closeBtn = document.querySelector('.modal-close-btn')
    const inputWrap = document.querySelector('.modal-input-wrap')
    const saveBtn = document.querySelector('.edit-save-btn')

    const editInput = "<input class='editOrder' type='text' maxlength='5'><select class='select-font' name='fonts'><option value='selectfont'>폰트</option><option value='dunggeunmo'>둥근모꼴</option><option value='binggrae'>빙그레체</option></select><select class='select-color' name='color'><option value='selectcolor'>색상</option><option value='black'>검은색</option><option value='brown'>갈색</option><option value='blue'>파란색</option></select>";


    const valueType = sessionStorage.getItem('ku');


    for(const item of editBtn){
      var sessionLength = JSON.parse(valueType).length
      item.addEventListener('click', ()=>{
        editModal.style.display = "block"

        for(let i = 0; i < sessionLength; i++){
          inputWrap.innerHTML = editInput.repeat( i + 1 );
        }
      })
      item.addEventListener('click', insertInformation)
    }


    function insertInformation(){

      for(let i = 0; i < sessionLength; i++){
        var inputInfo = JSON.parse(valueType)[i].name
        var inputBox = document.querySelectorAll('.editOrder')

        inputBox[i].setAttribute('value', inputInfo)
        // console.log(JSON.parse(valueType)[i])

      }
    }


    saveBtn.addEventListener('click', ()=>{
      var editName = document.querySelectorAll('.editOrder')
      var editFont = document.querySelectorAll('.select-font')


      for(var i = 0; i < JSON.parse(valueType).length; i++){
        // console.log(JSON.parse(valueType)[i].name)
        var oldname = JSON.parse(valueType)
        // console.log(oldname[i].name)
        var jsonObject = replaceName('name', oldname[i].name, '수정되었습니다');
        console.log(jsonObject)
      }


      // var jsonObject = replaceName('name', oldname, '수정되었습니다');

      function replaceName( field, oldvalue, newvalue ){
        var jsonObj = JSON.parse(valueType);
        for( var i = 0; i < jsonObj.length; i++ ){
          if( oldvalue == jsonObj[i][field] ){
            jsonObj[i][field] = newvalue;
          }
        }
        return jsonObj;
      }

      // console.log(jsonObject)



    })

    closeBtn.addEventListener('click', ()=>{
      editModal.style.display = "none"
    })

  }





});
