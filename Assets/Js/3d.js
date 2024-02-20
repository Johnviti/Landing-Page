import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
//câmera com posições e ângulos
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const Spinner = document.getElementById("carregamento");
const titulo = document.querySelector(".titulo");
const subttitulo = document.querySelector(".subtitulo");

// Mantenha o controle da posição do mouse
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Mantenha o objeto 3D em uma variável 
let object;

//permite que a câmera se mova ao redor da cena
let controls;


let objToRender = 'world';

const loader = new GLTFLoader();

// Carregue o arquivo
loader.load(
    `Assets/3D/${objToRender}/scene.gltf`,
    function (gltf) {
        // Adicione o modelo 3D à cena
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

// Instancie um novo renderizador e defina seu tamanho
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true permite o fundo transparente
renderer.setSize(window.innerWidth, window.innerHeight);

// Adicione o renderizador ao DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Defina a distância da câmera para o modelo 3D
camera.position.z = objToRender === "world" ? 15 : 500;

// Adicione luzes à cena para que possamos realmente ver o modelo 3D
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (cor, intensidade)
topLight.position.set(500, 500, 500) // canto superior esquerdo
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "world" ? 5 : 1);
scene.add(ambientLight);


// Isso adiciona controles à câmera, para que possamos girá-la
if (objToRender === "world") {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zooming

}
// Isso adiciona controles à câmera, para que possamos girá-la / ampliá-la com o mouse
// if (objToRender === "world") {
//     controls = new OrbitControls(camera, renderer.domElement);
// }

// Renderize a cena
function animate() {
    requestAnimationFrame(animate);
    // Aqui poderíamos adicionar algum código para atualizar a cena, adicionando algum movimento automático
    // object.rotation.y += 0.01;
    // Faça o olho se mover
    if (object && objToRender === "eye") {
        // Eu ajustei as constantes aqui até que parecesse bom
        object.rotation.y = -3 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
    }
    renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

animate();