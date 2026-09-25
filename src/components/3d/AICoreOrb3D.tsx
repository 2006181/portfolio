import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AICoreOrb3DProps {
  className?: string;
  activeCategory?: string;
}

export const AICoreOrb3D: React.FC<AICoreOrb3DProps> = ({ className = '', activeCategory }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreMatRef = useRef<THREE.MeshBasicMaterial | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 240;
    const height = container.clientHeight || 240;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.0, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    coreMatRef.current = innerMat;
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerSphere);

    // Outer icosahedron cage
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const outerLineMat = new THREE.LineBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.6
    });
    const outerCage = new THREE.LineSegments(wireframeGeo, outerLineMat);
    group.add(outerCage);

    // Orbital Rings
    const ring1Geo = new THREE.RingGeometry(2.1, 2.14, 32);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2Geo = new THREE.RingGeometry(2.3, 2.34, 32);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xb5179e, side: THREE.DoubleSide });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = -Math.PI / 4;
    group.add(ring2);

    // Orbiting satellites / skill nodes
    const satCount = 6;
    const satMeshes: THREE.Mesh[] = [];
    const satGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    for (let i = 0; i < satCount; i++) {
      const mesh = new THREE.Mesh(satGeo, satMat);
      group.add(mesh);
      satMeshes.push(mesh);
    }

    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.02;

      innerSphere.rotation.y += 0.015;
      innerSphere.rotation.x += 0.01;

      outerCage.rotation.y -= 0.012;
      outerCage.rotation.z += 0.008;

      ring1.rotation.z += 0.015;
      ring2.rotation.z -= 0.02;

      // Move satellites
      for (let i = 0; i < satCount; i++) {
        const angle = time * 0.8 + (i * Math.PI * 2) / satCount;
        const radius = 2.2;
        satMeshes[i].position.set(
          Math.cos(angle) * radius,
          Math.sin(angle * 0.5) * 0.8,
          Math.sin(angle) * radius
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (coreMatRef.current) {
      if (activeCategory === 'Machine Learning') {
        coreMatRef.current.color.setHex(0xff007f);
      } else if (activeCategory === 'Natural Language Processing') {
        coreMatRef.current.color.setHex(0xb5179e);
      } else if (activeCategory === 'Data Science & Analysis') {
        coreMatRef.current.color.setHex(0x00f0ff);
      } else if (activeCategory === 'ML Engineering & Deployment') {
        coreMatRef.current.color.setHex(0x9d4edd);
      } else if (activeCategory === 'Programming Languages') {
        coreMatRef.current.color.setHex(0x10b981);
      } else {
        coreMatRef.current.color.setHex(0x00f0ff);
      }
    }
  }, [activeCategory]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full min-h-[200px] relative pointer-events-none ${className}`} 
    />
  );
};
