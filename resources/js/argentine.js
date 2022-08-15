import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

let mixer;

// const clock = new THREE.Clock();
const container = document.getElementById( 'container' );

const renderer = new THREE.WebGLRenderer( { antialias: true,alpha: true } );
renderer.setClearColor( 0xffffff, 0);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( container.offsetWidth, container.offsetHeight );
// renderer.outputEncoding = THREE.sRGBEncoding;
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

loader.load( '/3d/argentine.gltf', function ( gltf ) {

    const model = gltf.scene;
    const group = new THREE.Group();

    model.children[0].material.color = new THREE.Color('#ff6460')

    const geometry = new THREE.SphereGeometry( 5, 50, 6 );
    //
    for (let i = 0; i < 6; i++) {
        let sphere = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: '#FFFFFF' } ))
        sphere.name = i;
        points.push(sphere)
        sphere.updateMatrixWorld()
        group.add( sphere );
    }
    points[0].position.set(-40,30,160) // front left
    points[1].position.set(40,50,120) // front right
    points[2].position.set(-70,50,40) // center left
    points[3].position.set(-20,10,-30) // roof center
    points[4].position.set(60,20,-100) // front top
    points[5].position.set(-80,20,-120) // back bottom

    model.add(group)

    model.position.set( 0, -1, 0 );
    model.scale.set( 0.014, 0.014, 0.014 );
    scene.add( model );
    mixer = new THREE.AnimationMixer( model );
    scene.updateMatrixWorld(true);

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

    // const delta = clock.getDelta();
    let v = new THREE.Vector3();
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
                endPlugSize: 8,
                color: 'white',
                size: 1.5,
                endPlugColor: '#DA6C56',
                hoverStyle: {color:'red'},
                path: 'straight'
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



