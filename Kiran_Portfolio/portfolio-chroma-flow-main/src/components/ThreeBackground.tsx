import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Create geometric shapes
    const geometry1 = new THREE.TorusGeometry(2, 0.5, 16, 100);
    const material1 = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const torus = new THREE.Mesh(geometry1, material1);
    torus.position.set(-3, 0, -5);
    scene.add(torus);

    const geometry2 = new THREE.IcosahedronGeometry(1.5, 0);
    const material2 = new THREE.MeshPhongMaterial({ 
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const icosahedron = new THREE.Mesh(geometry2, material2);
    icosahedron.position.set(3, 2, -5);
    scene.add(icosahedron);

    const geometry3 = new THREE.OctahedronGeometry(1, 0);
    const material3 = new THREE.MeshPhongMaterial({ 
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const octahedron = new THREE.Mesh(geometry3, material3);
    octahedron.position.set(0, -2, -3);
    scene.add(octahedron);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate shapes
      torus.rotation.x += 0.005;
      torus.rotation.y += 0.005;

      icosahedron.rotation.x += 0.003;
      icosahedron.rotation.y += 0.007;

      octahedron.rotation.x += 0.007;
      octahedron.rotation.z += 0.003;

      // Floating animation
      torus.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      icosahedron.position.y = 2 + Math.sin(Date.now() * 0.001 + 2) * 0.5;
      octahedron.position.y = -2 + Math.sin(Date.now() * 0.001 + 4) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current?.removeChild(renderer.domElement);
      geometry1.dispose();
      geometry2.dispose();
      geometry3.dispose();
      material1.dispose();
      material2.dispose();
      material3.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

export default ThreeBackground;
