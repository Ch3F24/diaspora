import * as THREE from 'three';

// import Stats from './jsm/libs/stats.module.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import {vector} from "three/examples/jsm/nodes/core/NodeBuilder";
import {CSS2DObject, CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer";
// import decor from 'three/examples/js/libs/draco/gltf'


let mixer, labelRenderer;

// let shape1;
const section = document.getElementById('section')
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
controls.enableDamping = true;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/3d/gltf/' );

const loader = new GLTFLoader();
loader.setDRACOLoader( dracoLoader );
const geometry = new THREE.SphereGeometry( 5, 50, 6 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

const points = [];


// const sphere = ;


// loader.load( '/3d/LittlestTokyo.glb', function ( gltf ) {
loader.load( '/3d/wintondale.gltf', function ( gltf ) {

    const model = gltf.scene;
    model.children[0].material.color = new THREE.Color('#DA6C56')
    console.log()
    for (let i = 0; i < 6; i++) {
        let sphere = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: '#DA6C56' } ))
        points.push(sphere)
        model.add( sphere );
    }
    points[0].position.set(60,160,120) // front top
    points[1].position.set(40,50,120) // front bottom
    points[2].position.set(-70,160,40) // center left
    points[3].position.set(-20,250,-30) // roof center
    points[4].position.set(60,160,-100) // front top
    points[5].position.set(-80,20,-120) // back bottom

    points[0].layers.enableAll();

    // const earthDiv = document.createElement( 'div' );
    // earthDiv.className = 'label';
    // earthDiv.textContent = 'Earth';
    // earthDiv.style.marginTop = '-1em';
    // earthDiv.style.color = '#ffffff';
    // const earthLabel = new CSS2DObject( earthDiv );
    // earthLabel.position.set( 0, 0, 0 );
    // model.add( earthLabel );
    // earthLabel.layers.set( 0 );

    // labelRenderer = new CSS2DRenderer();
    // labelRenderer.setSize( section.offsetWidth, section.offsetHeight );
    // labelRenderer.domElement.style.position = 'absolute';
    // labelRenderer.domElement.style.top = '0px';
    // labelRenderer.domElement.style.zIndex = '-1';
    // section.appendChild( labelRenderer.domElement );

    // shape1 = nestedObjecttoScreenXYZ(sphere,camera,renderer.domElement.width,renderer.domElement.height)


    model.position.set( 0, -1, 0 );
    model.scale.set( 0.012, 0.012, 0.012 );
    scene.add( model );
    mixer = new THREE.AnimationMixer( model );

    animate();
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

    mixer.update( delta );

    controls.update();

    renderer.render( scene, camera );
    // labelRenderer.render( scene, camera );

}


// function onPointerMove( event ) {
//
//     // calculate pointer position in normalized device coordinates
//     // (-1 to +1) for both components
//
//     pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
//     pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
//     console.log(pointer)
//
// }

// window.addEventListener( 'pointermove', onPointerMove );

// function nestedObjecttoScreenXYZ(obj,camera,width,height)
// {
//     var vector = new THREE.Vector3();
//     vector.setFromMatrixPosition( obj.matrixWorld );
//     var widthHalf = (width/2);
//     var heightHalf = (height/2);
//     vector.project(camera);
//     vector.x = ( vector.x * widthHalf ) + widthHalf;
//     vector.y = - ( vector.y * heightHalf ) + heightHalf;
//     // vector.x = ( vector.x + 1) * widthHalf;
//     // vector.y = - ( vector.y - 1) * heightHalf;
//     return vector;
// };
// function pointsHover() {
    var links = document.getElementsByClassName('category-link');
        // console.log(Object.entries(links))

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function (event) {
            points[event.target.id].material.color = new THREE.Color('#FFFFFF')
            points[event.target.id].scale.setScalar(1.7)
        })
        links[i].addEventListener('mouseleave', function (event) {
            points[event.target.id].material.color = new THREE.Color('#DA6C56')
            points[event.target.id].scale.setScalar(1)

        })
}
