export default {
    data() {
        return {
            score: 5,
            firstName: 'Bohdan',
            lastName: 'Partyk',
            imageSelected: 0,
            images: [
                'https://jooinn.com/images/1-2-3-1.jpg',
                'https://thumbs.dreamstime.com/z/icons-numbers-one-two-three-isolated-white-background-three-dimensional-rendering-88504243.jpg',
                'http://www.masinlab.it/wp-content/uploads/2017/10/123.png'
            ]
        };
    },
    methods: {
        randomImage() {
            this.imageSelected = this.getRandomInt(this.images.length);
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    },
    computed: {
        classObject() {
            return {
                hard: this.score >= 10
            };
        },
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        image() {
            return this.images[this.imageSelected];
        }
    }
};