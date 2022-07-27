import * as THREE from 'three';

// import Stats from './jsm/libs/stats.module.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import {vector} from "three/examples/jsm/nodes/core/NodeBuilder";
import {CSS2DObject, CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer";
import {SVGLoader} from "three/examples/jsm/loaders/SVGLoader";
// import decor from 'three/examples/js/libs/draco/gltf'


let mixer, labelRenderer,endPath1;

// let shape1;
const section = document.getElementById('section');
const clock = new THREE.Clock();
const container = document.getElementById( 'container' );
// const stats = new Stats();
// container.appendChild( stats.dom );

const renderer = new THREE.WebGLRenderer( { antialias: true,alpha: true } );
renderer.setClearColor( 0xffffff, 0);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( container.offsetWidth, container.offsetHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild( renderer.domElement );

const pmremGenerator = new THREE.PMREMGenerator( renderer );
const scene = new THREE.Scene();
// scene.background = new THREE.Color( '#001228' );
scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

const camera = new THREE.PerspectiveCamera( 40, container.offsetWidth / container.offsetHeight, 1, 100 );
camera.position.set( 5, 2, 8 );

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.5, 0 );
controls.update();
controls.enableZoom = false;
controls.enablePan = false;
controls.enableDamping = false;


const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/3d/gltf/' );

const loader = new GLTFLoader();
const svgLoader = new SVGLoader();
loader.setDRACOLoader( dracoLoader );
// const geometry = new THREE.SphereGeometry( 5, 50, 6 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

const points = [];
// let points;
// const raycaster = new THREE.Raycaster();
// const pointer = new THREE.Vector2();
// const sphere = ;
// const group = new THREE.Group();
const equipments = [];
let p;

loader.load( '/3d/wintondale.gltf', function ( gltf ) {

    const model = gltf.scene;
    console.log(model)
    // points = model.children[0].children[0].children
    // model.children[0].children[0].visible = false
    // console.log(points)
    // model.children[0].children[7].material.opacity = .5
    // model.children[0].children[6].visible = false
    // model.children[0].children[2].material.blending = THREE.AdditiveBlending
    // model.children[0].children[2].material.emissive = new THREE.Color('#150604')
    // model.children[0].children[2].material.emissiveIntensity = 0.01
    // model.children[0].children[2].material.color = new THREE.Color('#150604')
    model.children[0].material.color = new THREE.Color('#DA6C56')
    // model.children[0].children[2].material.trans = new THREE.Color('#100402')
    // model.children[0].children[2].material.transparent = true
    // model.children[0].children[7].material.opacity = 0.02


    // model.children[7].material.opacity = .5
    // model.children[0].material.color = new THREE.Color('#DA6C56')
    const geometry = new THREE.SphereGeometry( 5, 50, 6 );
    //
    for (let i = 0; i < 6; i++) {
        let sphere = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: '#FFFFFF' } ))
        points.push(sphere)
        sphere.updateMatrixWorld()
        model.add( sphere );
    }
    points[0].position.set(60,160,120) // front top
    points[1].position.set(40,50,120) // front bottom
    points[2].position.set(-70,160,40) // center left
    points[3].position.set(-20,250,-30) // roof center
    points[4].position.set(60,160,-100) // front top
    points[5].position.set(-80,20,-120) // back bottom

    // points[0].material.color = new THREE.Color('#150604')

    model.position.set( 0, -1.4, 0 );
    model.scale.set( 0.014, 0.014, 0.014 );
    scene.add( model );
    mixer = new THREE.AnimationMixer( model );
    scene.updateMatrixWorld(true);

    const svgMarkup = document.querySelector('svg').outerHTML;
    // const svgLoader = new THREE.SVGLoader();
    const svgData = svgLoader.parse(svgMarkup);

    const equipmentsUrl = ['/svg/cash_register.svg','/svg/bicaj.svg','/svg/demizson.svg','/svg/szecskazo.svg','/svg/mosodeszka.svg','/svg/enekeskonyv.svg']

    // equipmentsUrl.forEach((equipment,i) => {
    //     // console.log(loadSvg(equipment,model))
    //     equipments.push(loadSvg(equipment,model,i));
    // })

    animate();
    scene.updateMatrixWorld();
    points[0].parent.updateMatrixWorld();
    // console.log(renderer.domElement.width)

    // window.addEventListener( 'resize', onWindowResize );

}, undefined, function ( e ) {

    console.error( e );

} );


window.onresize = function () {
    console.log('resize')
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( container.offsetWidth, container.offsetHeight );

};

function animate() {

    requestAnimationFrame( animate );

    const delta = clock.getDelta();
    let v = new THREE.Vector3();

    // equipments.forEach(equipment => {
    //     equipment.lookAt(camera.getWorldPosition(v))
    // })

    renderer.render( scene, camera );
    // p = nestedObjecttoScreenXYZ(points[0],camera,renderer.domElement.width,renderer.domElement.height,true);
    // console.log(screenpos)
    // labelRenderer.render( scene, camera );

}


function onPointerMove( event ) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    // pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    // pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    console.log(event.clientX,event.clientY)

}

// window.addEventListener( 'mousemove', onPointerMove );

function screenPos(obj)
{
    const vector = new THREE.Vector3();
    const canvas = renderer.domElement; // `renderer` is a THREE.WebGLRenderer

    obj.updateMatrixWorld();  // `obj´ is a THREE.Object3D
    vector.setFromMatrixPosition(obj.matrixWorld);

    vector.project(camera); // `camera` is a THREE.PerspectiveCamera
    const canvasPosition = canvas.getBoundingClientRect();
    vector.x = canvasPosition.x + Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = canvasPosition.y + Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));
    return vector
}

// function pointsHover() {
    var links = document.getElementsByClassName('category-link');
        // console.log(Object.entries(links))

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function (event) {
            points[event.target.getAttribute("data-cat")].visible = false
            // equipments[event.target.getAttribute("data-cat")].visible = true
            let po = screenPos(points[event.target.getAttribute("data-cat")]);
            line = new LeaderLine(event.target,LeaderLine.pointAnchor({x: po.x, y: po.y}),{
                startPlug: 'behind',
                endPlug: 'disc',
                endPlugSize: 5,
                color: 'white',
                size: 1.5,
                endPlugColor: '#DA6C56',
                hoverStyle: {color:'red'},
            })
            // line.end = LeaderLine.pointAnchor({x: 200, y: 300})
        })
        links[i].addEventListener('mouseleave', function (event) {
            points[event.target.getAttribute("data-cat")].visible = true
            // equipments[event.target.getAttribute("data-cat")].visible = false
            line.remove()
        })
}


let line;
// let startPath = document.querySelector('#cat-0');
//
// startPath.addEventListener('mouseover',function () {
//     // group.visible = true
//     // console.log(endPath1)
//     line = new LeaderLine(startPath,LeaderLine.pointAnchor({x: p.x, y: p.y}),{
//         startPlug: 'behind',
//         endPlug: 'disc',
//         endPlugSize: 5,
//         color: 'white',
//         size: 1,
//         hoverStyle: {color:'red'},
//     })
// })

function loadSvg(url,model,i) {
    const group = new THREE.Group();

    svgLoader.load(
        // resource URL
        url,
        // called when the resource is loaded
        function ( data ) {
            const paths = data.paths;

            for ( let i = 0; i < paths.length; i ++ ) {

                const path = paths[ i ];

                const material = new THREE.MeshBasicMaterial( {
                    color: path.color,
                    side: THREE.DoubleSide,
                    depthWrite: false
                } );

                const shapes = SVGLoader.createShapes( path );

                for ( let j = 0; j < shapes.length; j ++ ) {

                    const shape = shapes[ j ];
                    const geometry = new THREE.ShapeGeometry( shape );
                    const mesh = new THREE.Mesh( geometry, material );
                    group.add( mesh );

                }
            }
            // group.scale.y *= -1;
            group.scale.set(.13, -.13)
            // group.position.set(40,180,120)
            group.position.set(points[i].position.x ,points[i].position.y,points[i].position.z)
            // group.position = points[i].position
            group.visible = false
            model.add( group );


        },
        // called when loading is in progresses
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );
    return group;
}


