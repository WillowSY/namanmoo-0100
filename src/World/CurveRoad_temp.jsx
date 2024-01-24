

import React from 'react';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';

export default function CurveRoad({ position, rotation }) {
  const innerRadius = 5;
  const outerRadius = 7;
  const thetaSegments = 18;
  const phiSegments = 2;
  const thetaStart = Math.PI * 0.5;
  const thetaLength = Math.PI * 0.5;

  const ringGeometry = new THREE.RingGeometry(
    innerRadius,
    outerRadius,
    thetaSegments,
    phiSegments,
    thetaStart,
    thetaLength
  );

  const extrudeSettings = {
    steps: 2,
    depth: 2, // Set the extrusion depth to give it a 3D effect
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  const exGeometry = new THREE.ExtrudeBufferGeometry(ringGeometry, extrudeSettings);

  const roadMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' });

  return (
    <>
      <RigidBody type="kinematicPosition" restitution={0} friction={0}>
        <mesh geometry={exGeometry} material={roadMaterial} rotation={rotation} position={[position[0], position[1], position[2]]} />
      </RigidBody>
    </>
  );
}