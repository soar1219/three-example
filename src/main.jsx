import * as THREE from "three";

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

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);