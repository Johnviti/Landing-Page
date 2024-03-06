import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
let camera;

if (window.innerWidth < 760) {
    camera = new THREE.PerspectiveCamera(12, 700 / 700, 0.1, 1000);
} else {
    // camera = new THREE.PerspectiveCamera(8, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(12, 700 / 700, 0.1, 1000);
}

const Spinner = document.getElementById("carregamento");
const titulo = document.querySelector(".titulo");
const subttitulo = document.querySelector(".subtitulo");

// Mantenha o controle da posição do mouse
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;
let controls;
let objToRender = 'World';

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); 
renderer.setSize(500, 500);

document.getElementById("container3D").appendChild(renderer.domElement);

camera.position.z = objToRender === "World" ? 12 : 500;

const topLight = new THREE.DirectionalLight(0xffffff, 1); 
topLight.position.set(500, 500, 500) 
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "World" ? 6 : 1);
scene.add(ambientLight);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;


const loader = new GLTFLoader();
loader.load(
    `scene.glb`,
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
        object.scale.set(1.8, 1.8, 1.8);
        object.position.y = -0.8;
        Spinner.style.display = "none";
        titulo.classList.add("digitando");
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% carregado');
    },
    function (error) {
        Spinner.style.display = "none";
        titulo.classList.add("digitando");
        console.error(error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    object.rotation.y += 0.001;
    renderer.render(scene, camera);
    controls.update(); 
}

window.addEventListener("resize", function () {
    camera.aspect = 1;
    camera.updateProjectionMatrix();
});

animate();