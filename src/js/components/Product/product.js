export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        const {id, name, images, inStock, isAction} = this.item;
        return {
            id,
            name,
            images,
            inStock,
            isAction,
            selected: 0,
            maxStock: inStock
        };
    },
    methods: {
        add() {
            if (this.inStock === 0) {
                return;
            }
            --this.inStock;
        },
        remove() {
            if (this.inStock === this.maxStock) {
                return;
            }
            ++this.inStock;
        },
        changeImage() {
            if (this.selected + 1 >= this.images.length) {
                this.selected = 0;
                return;
            }
            ++this.selected;
        }
    },
    computed: {
        imageSrc() {
            return this.images[this.selected];
        }
    }
};