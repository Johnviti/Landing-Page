import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(8, window.innerWidth / window.innerHeight, 0.1, 1000);

const Spinner = document.getElementById("carregamento");
const titulo = document.querySelector(".titulo");
const subttitulo = document.querySelector(".subtitulo");

// Mantenha o controle da posição do mouse
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;
let controls;
let objToRender = 'World';

const loader = new GLTFLoader();

// Carregue o arquivo
loader.load(
    `scene.gltf`,
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
        Spinner.style.display = "none";
        titulo.classList.add("digitando");
        subttitulo.classList.add("efeito-direita");
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% carregado');
    },
    function (error) {
        Spinner.style.display = "none";
        titulo.classList.add("digitando");
        subttitulo.classList.add("efeito-direita");
        console.error(error);
    }
);

const renderer = new THREE.WebGLRenderer({ alpha: true }); 
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container3D").appendChild(renderer.domElement);

camera.position.z = objToRender === "World" ? 12 : 500;

const topLight = new THREE.DirectionalLight(0xffffff, 1); 
topLight.position.set(500, 500, 500) 
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "World" ? 5 : 1);
scene.add(ambientLight);


// if (objToRender === "World") {
//     controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false; 
// }

// Renderize a cena
function animate() {
    requestAnimationFrame(animate);
    object.rotation.y += 0.001;
    object.position.x = 0.8;
    object.position.y = -0.6;
    renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


animate();