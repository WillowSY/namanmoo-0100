

 
import React from 'react';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';

{/*Torus
export default function CurveRoad({ position, rotation }) {
  const curvegeometry = new THREE.TorusGeometry( 6, 2, 5, 100, Math.PI ); 
  const roadMaterial = new THREE.MeshStandardMaterial({color: 'slategrey'})
  return (
    <>
      <RigidBody type="kinematicPosition" restitution={0} friction={0}>
        <mesh geometry={curvegeometry} material={roadMaterial} position={position} rotation = {rotation} receiveShadow castShadow />
      </RigidBody>
    </>
  );
}
{/*import React from 'react';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';
*/}
export default function CurveRoad({ position, rotation }) {
  

  const floorGeometry = new THREE.BoxGeometry(1, 1, 1)
  const roadGeometry = new THREE.BoxGeometry(1, 1, 1)
  const floorMaterial = new THREE.MeshStandardMaterial({color: 'yellowgreen'})
  const roadMaterial = new THREE.MeshStandardMaterial({color: 'slategrey'})

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
  return (
    <>
      <RigidBody type ="fixed" colliders="hull" restitution={0} friction={0}>
      <mesh geometry={ringGeometry} material= {roadMaterial} scale={[1, 1, 1]} rotation={rotation} position={position} receiveShadow castShadow/>
      </RigidBody>
    </>
  );
}
