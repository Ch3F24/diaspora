require('./bootstrap');
window.vue = require('vue');
const app = vue.createApp({});
import SvgVue from 'svg-vue3';
app.use(SvgVue);
app.component('slider', require('./components/slider.vue').default);
// app.component('svg-Import', require('./components/svgImport.vue').default);
app.mount('#app');

// const LeaderLine = require('leader-line/leader-line.min.js')

const winton = document.getElementById('winton-link');

const links = {
    winton: {
        link: document.getElementById('winton-link'),
        globePath: document.getElementById('globe-wintondale-path'),
        endPath: document.getElementById('globe-wintondale')
    },
    argentine: {
        link: document.getElementById('argentine-link'),
        globePath: document.getElementById('globe-argentine-path'),
        endPath: document.getElementById('globe-argentine')
    },
}

for(const [key,value] of Object.entries(links)) {
    if (value['link']) {

    value['link'].addEventListener('mouseenter',function () {
        value['globePath'].style.fill = '#F8BFBA';
    })
    value['link'].addEventListener('mouseleave',function () {
        value['globePath'].style.fill = 'transparent';
    })
    new LeaderLine(LeaderLine.mouseHoverAnchor(value['link'], 'draw',
        {
            style: {
                color: 'white',
                backgroundColor: null,
                backgroundImage: null
            },
            hoverStyle: {
                backgroundColor: null,

            }}
    ), value['endPath'],{
        startPlug: 'behind',
        endPlug: 'disc',
        endPlugSize: 5,
        color: 'white',
        size: 1
    });
    }
}
