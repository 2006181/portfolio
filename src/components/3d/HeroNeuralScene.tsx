import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroNeuralSceneProps {
  interactive?: boolean;
}

export const HeroNeuralScene: React.FC<HeroNeuralSceneProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 32;
    camera.position.y = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Neural Network Nodes
    const nodeCount = 55;
    const nodes: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.24, 12, 12);

    const cyanMaterial = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xff007f });
    const purpleMaterial = new THREE.MeshBasicMaterial({ color: 0xb5179e });

    const materials = [cyanMaterial, pinkMaterial, purpleMaterial];
    const nodeMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const radius = 10 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.7;
      const z = radius * Math.cos(phi) * 0.9;

      const pos = new THREE.Vector3(x, y, z);
      nodes.push(pos);
      nodeVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015
      ));

      const mesh = new THREE.Mesh(nodeGeometry, materials[i % materials.length]);
      mesh.position.copy(pos);
      worldGroup.add(mesh);
      nodeMeshes.push(mesh);
    }

    // 2. Synaptic Connection Lines
    const maxConnections = 160;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    worldGroup.add(lineMesh);

    // 3. Central AI Neural Core
    const coreGeometry = new THREE.IcosahedronGeometry(3.5, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLine = new THREE.LineSegments(coreWireframe);
    (coreLine.material as THREE.Material).transparent = true;
    (coreLine.material as THREE.Material).opacity = 0.35;
    (coreLine.material as THREE.LineBasicMaterial).color = new THREE.Color(0x00f0ff);
    worldGroup.add(coreLine);

    const innerCoreGeo = new THREE.SphereGeometry(2.0, 16, 16);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    worldGroup.add(innerCoreMesh);

    // 4. Floating Holographic Data Particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      if (Math.random() > 0.5) {
        particleColors[i * 3] = 0;
        particleColors[i * 3 + 1] = 0.94;
        particleColors[i * 3 + 2] = 1;
      } else {
        particleColors[i * 3] = 1;
        particleColors[i * 3 + 1] = 0;
        particleColors[i * 3 + 2] = 0.5;
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeo, particleMaterial);
    scene.add(particleSystem);

    // 5. Synthwave Grid Floor in 3D space
    const gridHelper = new THREE.GridHelper(70, 35, 0x00f0ff, 0x7209b7);
    gridHelper.position.y = -10;
    scene.add(gridHelper);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Smooth camera / world interpolation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      worldGroup.rotation.y = time * 0.08 + currentX;
      worldGroup.rotation.x = Math.sin(time * 0.05) * 0.05 + currentY * 0.5;

      coreLine.rotation.x += 0.005;
      coreLine.rotation.y += 0.008;
      innerCoreMesh.rotation.y -= 0.01;
      innerCoreMesh.rotation.z += 0.006;

      // Grid subtle forward movement
      gridHelper.position.z = (time * 2) % 2;

      // Update nodes position & boundaries
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        const vel = nodeVelocities[i];

        node.add(vel);

        // Keep inside boundary sphere
        if (node.length() > 16 || node.length() < 5) {
          vel.negate();
        }

        nodeMeshes[i].position.copy(node);
      }

      // Update synaptic lines
      let connectionIdx = 0;
      const connectionDist = 5.5;

      for (let i = 0; i < nodeCount && connectionIdx < maxConnections; i++) {
        for (let j = i + 1; j < nodeCount && connectionIdx < maxConnections; j++) {
          const dist = nodes[i].distanceTo(nodes[j]);
          if (dist < connectionDist) {
            const pIdx = connectionIdx * 6;
            linePositions[pIdx] = nodes[i].x;
            linePositions[pIdx + 1] = nodes[i].y;
            linePositions[pIdx + 2] = nodes[i].z;

            linePositions[pIdx + 3] = nodes[j].x;
            linePositions[pIdx + 4] = nodes[j].y;
            linePositions[pIdx + 5] = nodes[j].z;

            const alpha = 1 - dist / connectionDist;
            const isCyan = (i + j) % 2 === 0;

            const r = isCyan ? 0 : 1;
            const g = isCyan ? 0.94 * alpha : 0;
            const b = isCyan ? 1 * alpha : 0.5 * alpha;

            lineColors[pIdx] = r;
            lineColors[pIdx + 1] = g;
            lineColors[pIdx + 2] = b;

            lineColors[pIdx + 3] = r;
            lineColors[pIdx + 4] = g;
            lineColors[pIdx + 5] = b;

            connectionIdx++;
          }
        }
      }

      lineGeometry.setDrawRange(0, connectionIdx * 2);
      (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (lineGeometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

      // Rotate particle field
      particleSystem.rotation.y = -time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
};
