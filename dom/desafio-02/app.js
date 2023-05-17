new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('concluido')
        },
        watch(e) {
            this.valor = e.target.value;
        }
    },
});