import * as THREE from 'three';

// import Stats from './jsm/libs/stats.module.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

let mixer;

const section = document.getElementById('section');
const clock = new THREE.Clock();
const container = document.getElementById( 'container' );

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
// const svgLoader = new SVGLoader();
loader.setDRACOLoader( dracoLoader );
// const geometry = new THREE.SphereGeometry( 5, 50, 6 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

const points = [];
// let points;
let raycaster = new THREE.Raycaster();
let INTERSECTED, INTERSECTEDLINE;
const pointer = new THREE.Vector2();

// const pointer = new THREE.Vector2();
// const sphere = ;
// const group = new THREE.Group();
const equipments = [];
let p;

loader.load( '/3d/foldgomb.gltf', function ( gltf ) {

    const model = gltf.scene;
    console.log(model)
    model.children[2].material.color = new THREE.Color('#1f1111')
    model.children[3].material.color = new THREE.Color('#0b60de')
    model.children[4].material.color = new THREE.Color('#ff6460')
    model.children[0].material.color = new THREE.Color('#a40ee1')
    model.children[1].material.color = new THREE.Color('#cff61e')

    model.position.set( 0, 0, 0 );
    model.scale.set( 0.014, 0.014, 0.014 );
    scene.add( model );
    mixer = new THREE.AnimationMixer( model );

    animate();
    scene.updateMatrixWorld();
    // points[0].parent.updateMatrixWorld();
    // container.addEventListener( 'pointermove', onPointerMove );


}, undefined, function ( e ) {

    console.error( e );

} );

function onPointerMove( event ) {

    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ( ( event.clientX - rect.left ) / ( rect. right - rect.left ) ) * 2 - 1;
    pointer.y = - ( ( event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;
}

window.onresize = function () {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( container.offsetWidth, container.offsetHeight );

};

function animate() {

    requestAnimationFrame( animate );

    const delta = clock.getDelta();
    let v = new THREE.Vector3();

    camera.updateMatrixWorld();


    // raycaster.setFromCamera(pointer, camera);
    //
    // let intersects = raycaster.intersectObjects( points );
    //
    // if ( intersects.length > 0 ) {
    //
    //     if ( INTERSECTED !== intersects[ 0 ].object ) {
    //
    //         INTERSECTED = intersects[ 0 ].object;
    //         let target = document.querySelector(`a[data-cat="${INTERSECTED.name}"]`)
    //         let po = screenPos(intersects[ 0 ].object);
    //         INTERSECTEDLINE = new LeaderLine(target,LeaderLine.pointAnchor({x: po.x, y: po.y}),{
    //             startPlug: 'behind',
    //             endPlug: 'disc',
    //             endPlugSize: 8,
    //             color: 'white',
    //             size: 1.5,
    //             endPlugColor: '#DA6C56',
    //             hoverStyle: {color:'red'},
    //             path: 'straight'
    //         })
    //
    //         INTERSECTED.material.color = new THREE.Color('#DA6C56');
    //     }
    //
    // } else {
    //     if ( INTERSECTED ) {
    //         INTERSECTEDLINE.remove();
    //         INTERSECTED.material.color = new THREE.Color('#FFFFFF');
    //     }
    //
    //     INTERSECTED = null;
    //
    // }


    renderer.render( scene, camera );
}

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



