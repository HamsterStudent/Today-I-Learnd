Vue.component('hamster-message',{

    props: ['title', 'body'],
    
    data(){
        return {
            isVisible: true
        };
    },

    template: `
    <article class="message is-primary" v-show="isVisible">
        <div class="message-header">
            {{ title }}

            <span class="close" @click="hideModal">X</span>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
    `,

    methods: {
        hideModal(){
            this.isVisible = false;
        }
    }
});

new Vue({
    el: '#root'
})