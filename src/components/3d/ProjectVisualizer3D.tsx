import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ProjectVisualizer3DProps {
  type: 'regression' | 'classification' | 'eda';
  className?: string;
}

export const ProjectVisualizer3D: React.FC<ProjectVisualizer3DProps> = ({ type, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 200;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Grid Floor
    const grid = new THREE.GridHelper(8, 8, 0x00f0ff, 0x3a0ca3);
    grid.position.y = -1.8;
    group.add(grid);

    if (type === 'regression') {
      // 1. Scatter Data Points
      const pointGeo = new THREE.SphereGeometry(0.12, 10, 10);
      const pointMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

      const points: THREE.Mesh[] = [];
      for (let i = -15; i <= 15; i++) {
        const x = i * 0.18;
        const noise = (Math.random() - 0.5) * 0.7;
        const y = 0.5 * x + noise;
        const z = (Math.random() - 0.5) * 1.5;

        const mesh = new THREE.Mesh(pointGeo, pointMat);
        mesh.position.set(x, y, z);
        group.add(mesh);
        points.push(mesh);
      }

      // 2. Best-fit Regression Line
      const linePoints = [
        new THREE.Vector3(-3.2, -1.6, 0),
        new THREE.Vector3(3.2, 1.6, 0)
      ];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xff007f,
        linewidth: 3
      });
      const regressionLine = new THREE.Line(lineGeo, lineMat);
      group.add(regressionLine);

      // Regression Plane
      const planeGeo = new THREE.PlaneGeometry(6.5, 3.5);
      const planeMat = new THREE.MeshBasicMaterial({
        color: 0xff007f,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12,
        wireframe: true
      });
      const plane = new THREE.Mesh(planeGeo, planeMat);
      plane.rotation.z = Math.atan(0.5);
      group.add(plane);

    } else if (type === 'classification') {
      // 1. Cluster A (Pass / Cyan)
      const passGeo = new THREE.SphereGeometry(0.14, 10, 10);
      const passMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

      for (let i = 0; i < 20; i++) {
        const x = 1.2 + Math.random() * 1.8;
        const y = 0.5 + (Math.random() - 0.5) * 1.8;
        const z = (Math.random() - 0.5) * 2;
        const mesh = new THREE.Mesh(passGeo, passMat);
        mesh.position.set(x, y, z);
        group.add(mesh);
      }

      // 2. Cluster B (Fail / Pink)
      const failGeo = new THREE.SphereGeometry(0.14, 10, 10);
      const failMat = new THREE.MeshBasicMaterial({ color: 0xff007f });

      for (let i = 0; i < 20; i++) {
        const x = -1.2 - Math.random() * 1.8;
        const y = -0.5 + (Math.random() - 0.5) * 1.8;
        const z = (Math.random() - 0.5) * 2;
        const mesh = new THREE.Mesh(failGeo, failMat);
        mesh.position.set(x, y, z);
        group.add(mesh);
      }

      // 3. Separating Decision Boundary Hyperplane
      const boundaryGeo = new THREE.PlaneGeometry(0.1, 4);
      const boundaryMat = new THREE.MeshBasicMaterial({
        color: 0xb5179e,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide
      });
      const boundary = new THREE.Mesh(boundaryGeo, boundaryMat);
      boundary.rotation.y = Math.PI / 4;
      group.add(boundary);

      const ringGeo = new THREE.RingGeometry(2.5, 2.55, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      group.add(ring);

    } else if (type === 'eda') {
      // 3D Bar Chart Visualizer
      const barCount = 6;
      const barMeshes: THREE.Mesh[] = [];
      const barHeights = [1.2, 2.4, 3.1, 1.8, 2.9, 2.2];

      for (let i = 0; i < barCount; i++) {
        const h = barHeights[i];
        const barGeo = new THREE.BoxGeometry(0.5, h, 0.5);
        const isCyan = i % 2 === 0;
        const barMat = new THREE.MeshBasicMaterial({
          color: isCyan ? 0x00f0ff : 0xff007f,
          wireframe: false
        });
        const mesh = new THREE.Mesh(barGeo, barMat);
        mesh.position.set((i - 2.5) * 0.9, -1.8 + h / 2, 0);
        group.add(mesh);
        barMeshes.push(mesh);

        // Halo wireframe outline
        const wireGeo = new THREE.BoxGeometry(0.52, h, 0.52);
        const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.3 });
        const wire = new THREE.Mesh(wireGeo, wireMat);
        wire.position.copy(mesh.position);
        group.add(wire);
      }
    }

    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.015;

      group.rotation.y = time * 0.4;
      group.position.y = Math.sin(time) * 0.1;

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
  }, [type]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full min-h-[180px] relative overflow-hidden pointer-events-none ${className}`}
    />
  );
};
