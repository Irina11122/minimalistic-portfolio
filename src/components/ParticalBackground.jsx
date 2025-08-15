import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleBackground({ theme }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const particlesCount = 700;
    const positions = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      sizes[i] = y < 0 ? 1 : 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    const circleTexture = new THREE.TextureLoader().load(
      "data:image/svg+xml;base64," +
        btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <circle cx="32" cy="32" r="32" fill="white" />
      </svg>`
        )
    );
    const pastelColors = [0xffe1e0, 0xf49bab, 0x9b7ebd, 0x7f55b1];
    const material = new THREE.PointsMaterial({
      color: theme === "dark" ? 0xffffff : 0xe6e6fa,
      size: 0.1,
      map: circleTexture,
      transparent: true,
      alphaTest: 0.01,
      vertexColors: true,
    });
    const colors = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const color = new THREE.Color(
        pastelColors[Math.floor(Math.random() * pastelColors.length)]
      );
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0005 + mouseX * 0.001;
      particles.rotation.x += 0.0003 + mouseY * 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [theme]);

  return <div ref={mountRef} className="fixed top-0 left-0 z-10"></div>;
}
