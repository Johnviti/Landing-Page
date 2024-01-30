import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 5, 0 );
controls.update();

function frameArea( sizeToFitOnScreen, boxSize, boxCenter, camera ) {

	const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
	const halfFovY = THREE.MathUtils.degToRad( camera.fov * .5 );
	const distance = halfSizeToFitOnScreen / Math.tan( halfFovY );

	const direction = ( new THREE.Vector3() )
		.subVectors( camera.position, boxCenter )
		.multiply( new THREE.Vector3( 1, 0, 1 ) )
		.normalize();

	camera.position.copy( direction.multiplyScalar( distance ).add( boxCenter ) );

	camera.near = boxSize / 100;
	camera.far = boxSize * 100;

	camera.updateProjectionMatrix();

	camera.lookAt( boxCenter.x, boxCenter.y, boxCenter.z );

}

const loader = new GLTFLoader();
gltfLoader.load( 'scene.glb', ( gltf ) => {

	const root = gltf.scene;
	scene.add( root );

	// compute the box that contains all the stuff
	// from root and below
	const box = new THREE.Box3().setFromObject( root );

	const boxSize = box.getSize( new THREE.Vector3() ).length();
	const boxCenter = box.getCenter( new THREE.Vector3() );

	// set the camera to frame the box
	frameArea( boxSize * 0.5, boxSize, boxCenter, camera );

	// update the Trackball controls to handle the new size
	controls.maxDistance = boxSize * 10;
	controls.target.copy( boxCenter );
	controls.update();

} );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();