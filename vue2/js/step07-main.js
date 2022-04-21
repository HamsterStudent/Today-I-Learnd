Vue.component('task-list',{

    template: `
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
    </div>
    `,

    data(){
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Go to the email', complete: false },
                { task: 'Go to the farm', complete: true },
                { task: 'Go to work', complete: false },
            ]
        }
    }
});


Vue.component('task',{

    template: '<li><slot></slot></li>',

    // "data :" 형식으로 쓰면 안됨! data는 함수형으로 전달해야 함
    // data(){}

})

new Vue({
    el: '#root'
})
