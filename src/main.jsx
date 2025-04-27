import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,window.innerWidth / window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({alpha : true});

document.body.appendChild(renderer.domElement)

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

//ジオメトリの作成
const ballGeometry = new THREE.SphereGeometry(100, 64, 32);