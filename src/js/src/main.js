import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue/dist/vue.esm';
import Card from '../components/card/Card';
import Product from '../components/Product/Product';

new Vue({
    el: '#app',
    components: {
        Card,
        Product
    },
    data: {
        products: [
            {
                id: 1,
                name: 'Oral-B Oxyjet MD20',
                images: [
                    'https://cdn.alza.cz/ImgW.ashx?fd=f4&cd=EAZ6003g&i=1.jpg',
                    'https://cdn.alza.cz/ImgW.ashx?fd=FotoAddOrig&cd=EAZ6003g-02&i=1.jpg',
                    'https://cdn.alza.cz/ImgW.ashx?fd=FotoAddOrig&cd=EAZ6003g-06&i=1.jpg'
                ],
                inStock: 5,
                isAction: false
            },
            {
                id: 2,
                name: 'Philips Sonicare DiamondClean a AirFloss Ultra Black HX8491/03',
                images: [
                    'https://cdn.alza.cz/ImgW.ashx?fd=f4&cd=PHIDI222&i=1.jpg',
                    'https://cdn.alza.cz/ImgW.ashx?fd=FotoAddOrig&cd=PHIDI222-02&i=1.jpg',
                    'https://cdn.alza.cz/ImgW.ashx?fd=FotoAddOrig&cd=PHIDI222-03&i=1.jpg'
                ],
                inStock: 15,
                isAction: true
            }
        ]
    }
});