import * as THREE from "three";
import { lightPosition } from "three/src/nodes/TSL.js";
import { sin } from "three/tsl";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.set(0, 0, 500);
const renderer = new THREE.WebGLRenderer({alpha : true});

document.body.appendChild(renderer.domElement)


//ジオメトリの作成
const ballGeometry = new THREE.SphereGeometry(100, 64, 32);
//マテリアルの作成
const ballMaterial = new THREE.MeshPhysicalMaterial();
//メッシュ化
const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
/* directionalLight.position.set(1, 1, 1) */
/* scene.add(directionalLight) */

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(-200, -200, -200)
pointLight.decay = 1;
pointLight.power = 1000;

scene.add(pointLight)

const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
scene.add(pointLightHelper);



function animate() {
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 1000),
    200 * Math.cos(Date.now() / 500),
  );
  requestAnimationFrame(animate)
  renderer.render(scene, camera);
}

animate()

renderer.setSize(window.innerWidth, window.innerHeight);
