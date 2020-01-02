import MainImage from '../image/Image';
import Score from '../score/Score';
import AsciiDudes from '../AsciiDudes/AsciiDudes';
import Buttons from '../Buttons/buttons';

export default {
    components: {
        MainImage,
        Score,
        AsciiDudes,
        Buttons
    },
    data() {
        return {
            score: 5,
            firstName: 'Bohdan',
            lastName: 'Partyk',
            imageSelected: 0,
            images: [
                '/assets/images/one.png',
                '/assets/images/two.jpg',
                '/assets/images/three.jpg'
            ]
        };
    },
    methods: {
        randomImage() {
            this.imageSelected = this.getRandomInt(this.images.length);
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },
        debug(message) {
            console.log(message);
        },
        clickPoo() {
            this.$emit('click-poo');
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