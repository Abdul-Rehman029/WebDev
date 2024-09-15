// src/components/ThreeDBackground.jsx
import React, { useEffect } from "react";
import * as THREE from "three";

const ThreeDBackground = () => {
  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById("threeDBackground").appendChild(renderer.domElement);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/assets/particle-texture.png");

    // Create particles
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = Math.random() * 2000 - 1000;
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      map: texture,
      size: 5,
      transparent: true,
      opacity: 0.7,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add rotating objects
    const geometry = new THREE.SphereGeometry(50, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(200, 0, 0);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);

    const boxGeometry = new THREE.BoxGeometry(50, 50, 50);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(-200, 0, 0);
    box.castShadow = true;
    box.receiveShadow = true;
    scene.add(box);

    // Position the camera
    camera.position.z = 500;

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Parallax effect on mouse movement
      window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        camera.position.x = x * 50;
        camera.position.y = y * 50;
        camera.lookAt(scene.position);
      });

      // Rotate the particle system
      particleSystem.rotation.y += 0.001;

      // Rotate the objects
      sphere.rotation.y += 0.01;
      box.rotation.x += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div id="threeDBackground" className="fixed top-0 left-0 w-full h-full -z-10"></div>;
};

export default ThreeDBackground;
