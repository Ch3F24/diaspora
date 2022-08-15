require('./bootstrap');



// const links = {
//     winton: {
//         link: document.getElementById('winton-link'),
//         globePath: document.getElementById('globe-wintondale-path'),
//         endPath: document.getElementById('globe-wintondale')
//     },
//     argentine: {
//         link: document.getElementById('argentine-link'),
//         globePath: document.getElementById('globe-argentine-path'),
//         endPath: document.getElementById('globe-argentine')
//     },
// }
// const leaderLineStyle = {
//     startPlug: 'behind',
//     endPlug: 'disc',
//     endPlugSize: 5,
//     color: 'white',
//     size: 1,
//     path: 'straight'
// }

// function drawLine() {
//     for(const [key,value] of Object.entries(links)) {
//         if (value['link']) {
//
//             value['link'].addEventListener('mouseenter',function () {
//                 value['globePath'].style.fill = '#F8BFBA';
//             })
//             value['link'].addEventListener('mouseleave',function () {
//                 value['globePath'].style.fill = 'transparent';
//             })
//
//             if (window.matchMedia('screen and (max-width: 1024px)').matches) {
//                 console.log('match')
//                 new LeaderLine(value['link'],value['endPath'],leaderLineStyle)
//             } else {
//                 new LeaderLine(LeaderLine.mouseHoverAnchor(value['link'], 'draw',
//                     {
//                         style: {
//                             color: 'white',
//                             backgroundColor: null,
//                             backgroundImage: null
//                         },
//                         hoverStyle: {
//                             backgroundColor: null,
//
//                         }}
//                 ), value['endPath'],leaderLineStyle);
//             }
//         }
//     }
// }

// drawLine();
