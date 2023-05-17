new Vue({
    el: '#desafio',
    data: {
        name: 'Beatriz',
        age: 26,
        linkImage: '../../assets/flores.jpg',
    },
    methods: {
        calc() {
            return this.age * 3;
        },
        random() {
            return Math.random();
        },
    },
});