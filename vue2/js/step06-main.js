Vue.component('task',{

    template: '<li><slot></slot></li>',

    // "data :" 형식으로 쓰면 안됨! data는 함수형으로 전달해야 함
    // data(){}

})

new Vue({
    el: '#root'
})
