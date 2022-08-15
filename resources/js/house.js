import * as THREE from 'three';

// import Stats from './jsm/libs/stats.module.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
// import { GUI } from '.three/examples//jsm/libs/lil-gui.module.min.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import {vector} from "three/examples/jsm/nodes/core/NodeBuilder";
import {CSS2DObject, CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer";
// import {SVGLoader} from "three/examples/jsm/loaders/SVGLoader";
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
renderer.outputEncoding = 3000;
renderer.toneMapping = THREE.ReinhardToneMapping;
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

loader.load( '/3d/wintondale.gltf', function ( gltf ) {

    const model = gltf.scene;
    const group = new THREE.Group();
    // points = model.children[0].children[0].children
    // model.children[0].children[0].visible = false
    // console.log(points)
    // model.children[0].children[7].material.opacity = .5
    // model.children[0].children[6].visible = false
    // model.children[0].children[2].material.blending = THREE.AdditiveBlending
    // model.children[0].children[2].material.emissive = new THREE.Color('#150604')
    // model.children[0].children[2].material.emissiveIntensity = 0.01
    // model.children[0].children[2].material.color = new THREE.Color('#150604')
    model.children[0].material.color = new THREE.Color('#ff6460')
    // model.children[0].material.emissive = new THREE.Color('#ff6460')
    // model.children[0].material.emissiveIntensity = 0
    // model.children[0].children[2].material.trans = new THREE.Color('#100402')
    // model.children[0].children[2].material.transparent = true
    // model.children[0].children[7].material.opacity = 0.02


    // model.children[7].material.opacity = .5
    // model.children[0].material.color = new THREE.Color('#DA6C56')
    const geometry = new THREE.SphereGeometry( 5, 50, 6 );
    //
    for (let i = 0; i < 6; i++) {
        let sphere = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: '#FFFFFF' } ))
        sphere.name = i;
        points.push(sphere)
        sphere.updateMatrixWorld()
        // model.add( sphere );
        group.add( sphere );
    }
    points[0].position.set(60,160,120) // front top
    points[1].position.set(40,50,120) // front bottom
    points[2].position.set(-70,160,40) // center left
    points[3].position.set(-20,250,-30) // roof center
    points[4].position.set(60,160,-100) // front top
    points[5].position.set(-80,20,-120) // back bottom

    model.add(group)
    // points[0].material.color = new THREE.Color('#150604')

    model.position.set( 0, -1.4, 0 );
    model.scale.set( 0.014, 0.014, 0.014 );
    scene.add( model );
    mixer = new THREE.AnimationMixer( model );
    scene.updateMatrixWorld(true);

    // const svgMarkup = document.querySelector('svg').outerHTML;
    // const svgLoader = new THREE.SVGLoader();
    // const svgData = svgLoader.parse(svgMarkup);

    // const equipmentsUrl = ['/svg/cash_register.svg','/svg/bicaj.svg','/svg/demizson.svg','/svg/szecskazo.svg','/svg/mosodeszka.svg','/svg/enekeskonyv.svg']

    // equipmentsUrl.forEach((equipment,i) => {
    //     // console.log(loadSvg(equipment,model))
    //     equipments.push(loadSvg(equipment,model,i));
    // })

    // window.addEventListener( 'resize', onWindowResize );

    animate();
    scene.updateMatrixWorld();
    points[0].parent.updateMatrixWorld();
    container.addEventListener( 'pointermove', onPointerMove );


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

    // equipments.forEach(equipment => {
    //     equipment.lookAt(camera.getWorldPosition(v))
    // })
    camera.updateMatrixWorld();


    raycaster.setFromCamera(pointer, camera);

    let intersects = raycaster.intersectObjects( points );

    if ( intersects.length > 0 ) {

        if ( INTERSECTED !== intersects[ 0 ].object ) {

            INTERSECTED = intersects[ 0 ].object;
            let target = document.querySelector(`a[data-cat="${INTERSECTED.name}"]`)
            let po = screenPos(intersects[ 0 ].object);
            INTERSECTEDLINE = new LeaderLine(target,LeaderLine.pointAnchor({x: po.x, y: po.y}),{
                startPlug: 'behind',
                endPlug: 'disc',
                endPlugSize: 8,
                color: 'white',
                size: 1.5,
                endPlugColor: '#DA6C56',
                hoverStyle: {color:'red'},
                path: 'straight'
            })

            INTERSECTED.material.color = new THREE.Color('#DA6C56');
        }

    } else {
        if ( INTERSECTED ) {
            INTERSECTEDLINE.remove();
            INTERSECTED.material.color = new THREE.Color('#FFFFFF');
        }

        INTERSECTED = null;

    }


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

var links = document.getElementsByClassName('category-link');
let line;

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function (event) {
        points[event.target.getAttribute("data-cat")].visible = false
        // equipments[event.target.getAttribute("data-cat")].visible = true
        let po = screenPos(points[event.target.getAttribute("data-cat")]);
        line = new LeaderLine(event.target,LeaderLine.pointAnchor({x: po.x, y: po.y}),{
            startPlug: 'behind',
            endPlug: 'disc',
            endPlugSize: 8,
            color: 'white',
            size: 1.5,
            endPlugColor: '#DA6C56',
            hoverStyle: {color:'red'},
            path: 'straight'
        })
    })
    links[i].addEventListener('mouseleave', function (event) {
        points[event.target.getAttribute("data-cat")].visible = true
        line.remove()
    })
}



