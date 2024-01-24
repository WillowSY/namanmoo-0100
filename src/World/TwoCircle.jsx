import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';

export default function TwoCircle() {
  const arcCenterX = 50;
  const innerTrackRadius = 30;
  const outerTrackRadius = 40;
  const arcAngle1 = Math.PI / 6;
  const arcAngle2 = Math.PI / 12;
  const arcAngle3 = Math.PI / 4;
  const arcAngle4 = Math.PI / 3;
  const lawnGreen = '#7CFC00';
  const edgeColor = '#000000';

  const getCurbsTexture = (mapWidth, mapHeight) => {
    const canvas = document.createElement("canvas");
        canvas.width = mapWidth;
        canvas.height = mapHeight;
        const context = canvas.getContext("2d");
      
        context.fillStyle = lawnGreen;
        context.fillRect(0, 0, mapWidth, mapHeight);
      
        // Extra big
        context.lineWidth = 65;
        context.strokeStyle = "#A2FF75";
        context.beginPath();
        context.arc(
          mapWidth / 2 - arcCenterX,
          mapHeight / 2,
          innerTrackRadius,
          arcAngle1,
          -arcAngle1
        );
        context.arc(
          mapWidth / 2 + arcCenterX,
          mapHeight / 2,
          outerTrackRadius,
          Math.PI + arcAngle2,
          Math.PI - arcAngle2,
          true
        );
        context.stroke();
      
        context.beginPath();
        context.arc(
          mapWidth / 2 + arcCenterX,
          mapHeight / 2,
          innerTrackRadius,
          Math.PI + arcAngle1,
          Math.PI - arcAngle1
        );
        context.arc(
          mapWidth / 2 - arcCenterX,
          mapHeight / 2,
          outerTrackRadius,
          arcAngle2,
          -arcAngle2,
          true
        );
        context.stroke();
      
        // Extra small
        context.lineWidth = 60;
        context.strokeStyle = lawnGreen;
        context.beginPath();
        context.arc(
          mapWidth / 2 - arcCenterX,
          mapHeight / 2,
          innerTrackRadius,
          arcAngle1,
          -arcAngle1
        );
        context.arc(
          mapWidth / 2 + arcCenterX,
          mapHeight / 2,
          outerTrackRadius,
          Math.PI + arcAngle2,
          Math.PI - arcAngle2,
          true
        );
        context.arc(
          mapWidth / 2 + arcCenterX,
          mapHeight / 2,
          innerTrackRadius,
          Math.PI + arcAngle1,
          Math.PI - arcAngle1
        );
        context.arc(
          mapWidth / 2 - arcCenterX,
          mapHeight / 2,
          outerTrackRadius,
          arcAngle2,
          -arcAngle2,
          true
        );
        context.stroke();
      
        // Base
        context.lineWidth = 6;
        context.strokeStyle = edgeColor;
      
        // Outer circle left
        context.beginPath();
        context.arc(
          mapWidth / 2 - arcCenterX,
          mapHeight / 2,
          outerTrackRadius,
          0,
          Math.PI * 2
        );
        context.stroke();
      
        // Outer circle right
        context.beginPath();
        context.arc(
          mapWidth / 2 + arcCenterX,
          mapHeight / 2,
          outerTrackRadius,
          0,
          Math.PI * 2
        );
        context.stroke();
      
        // Inner circle left
        context.beginPath();
        context.arc(
          mapWidth / 2 - arcCenterX,
          mapHeight / 2,
          innerTrackRadius,
          0,
          Math.PI * 2
        );
        context.stroke();
      
        // Inner circle right
        context.beginPath();
        context.arc(
          mapWidth / 2 + arcCenterX,
          mapHeight / 2,
          innerTrackRadius,
          0,
          Math.PI * 2
        );
        context.stroke();

    return new THREE.CanvasTexture(canvas);
  };

  const getLeftIsland = () => {
    const islandLeft = new THREE.Shape();
      
        islandLeft.absarc(
          -arcCenterX,
          0,
          innerTrackRadius,
          arcAngle1,
          -arcAngle1,
          false
        );
      
        islandLeft.absarc(
          arcCenterX,
          0,
          outerTrackRadius,
          Math.PI + arcAngle2,
          Math.PI - arcAngle2,
          true
        );
      
        return islandLeft;
  };

  const getMiddleIsland = () => {
    const islandMiddle = new THREE.Shape();
      
    islandMiddle.absarc(
        -arcCenterX,
        0,
        innerTrackRadius,
        arcAngle3,
        -arcAngle3,
        true
    );
    
    islandMiddle.absarc(
        arcCenterX,
        0,
        innerTrackRadius,
        Math.PI + arcAngle3,
        Math.PI - arcAngle3,
        true
    );
    
    return islandMiddle;
  };

  const getRightIsland = () => {
    const islandRight = new THREE.Shape();

    // ... (생략)

    return islandRight;
  };

  const getOuterField = (mapWidth, mapHeight) => {
    const field = new THREE.Shape();

    // ... (생략)

    return field;
  };

  const renderMap = (mapWidth, mapHeight) => {
    // ... (생략)

    return (
      <Canvas>
        {/* Three.js plane */}
        <mesh receiveShadow castShadow>
          <planeBufferGeometry args={[mapWidth, mapHeight]} />
          <meshLambertMaterial map={lineMarkingsTexture} />
        </mesh>

        {/* Extruded geometry with curbs */}
        <RigidBody type="kinematicPosition" restitution={0} friction={0}>
          <mesh geometry={fieldGeometry} material={[material, new THREE.MeshLambertMaterial({ color: 0x23311c })]} receiveShadow castShadow />
        </RigidBody>
      </Canvas>
    );
  };

  return (
    <div>
      {renderMap(cameraWidth, cameraHeight * 2)}
    </div>
  );
}


    function getCurbsTexture(mapWidth, mapHeight) {
        
    }
    
      function getLeftIsland() {
        
      }
      
      function getMiddleIsland() {
        
      }
      
      function getRightIsland() {
        const islandRight = new THREE.Shape();
      
        islandRight.absarc(
          arcCenterX,
          0,
          innerTrackRadius,
          Math.PI - arcAngle1,
          Math.PI + arcAngle1,
          true
        );
      
        islandRight.absarc(
          -arcCenterX,
          0,
          outerTrackRadius,
          -arcAngle2,
          arcAngle2,
          false
        );
      
        return islandRight;
      }
      
      function getOuterField(mapWidth, mapHeight) {
        const field = new THREE.Shape();
      
        field.moveTo(-mapWidth / 2, -mapHeight / 2);
        field.lineTo(0, -mapHeight / 2);
      
        field.absarc(-arcCenterX, 0, outerTrackRadius, -arcAngle4, arcAngle4, true);
      
        field.absarc(
          arcCenterX,
          0,
          outerTrackRadius,
          Math.PI - arcAngle4,
          Math.PI + arcAngle4,
          true
        );
      
        field.lineTo(0, -mapHeight / 2);
        field.lineTo(mapWidth / 2, -mapHeight / 2);
        field.lineTo(mapWidth / 2, mapHeight / 2);
        field.lineTo(-mapWidth / 2, mapHeight / 2);
      
        return field;
      }
}

renderMap(cameraWidth, cameraHeight * 2); // The map height is higher because we look at the map from an angle


  
  function renderMap(mapWidth, mapHeight) {
    const lineMarkingsTexture = getLineMarkings(mapWidth, mapHeight);
  
    const planeGeometry = new THREE.PlaneBufferGeometry(mapWidth, mapHeight);
    const planeMaterial = new THREE.MeshLambertMaterial({
      map: lineMarkingsTexture
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.matrixAutoUpdate = false;
    scene.add(plane);
  
    // Extruded geometry with curbs
    const islandLeft = getLeftIsland();
    const islandMiddle = getMiddleIsland();
    const islandRight = getRightIsland();
    const outerField = getOuterField(mapWidth, mapHeight);
  
    // Mapping a texture on an extruded geometry works differently than mapping it to a box
    // By default it is mapped to a 1x1 unit square, and we have to stretch it out by setting repeat
    // We also need to shift it by setting the offset to have it centered
    const curbsTexture = getCurbsTexture(mapWidth, mapHeight);
    curbsTexture.offset = new THREE.Vector2(0.5, 0.5);
    curbsTexture.repeat.set(1 / mapWidth, 1 / mapHeight);
  
    // An extruded geometry turns a 2D shape into 3D by giving it a depth
    const fieldGeometry = new THREE.ExtrudeBufferGeometry(
      [islandLeft, islandRight, islandMiddle, outerField],
      { depth: 6, bevelEnabled: false }
    );
  
    const fieldMesh = new THREE.Mesh(fieldGeometry, [
      new THREE.MeshLambertMaterial({
        // Either set a plain color or a texture depending on config
        color: !config.curbs && lawnGreen,
        map: config.curbs && curbsTexture
      }),
      new THREE.MeshLambertMaterial({ color: 0x23311c })
    ]);
    fieldMesh.receiveShadow = true;
    fieldMesh.matrixAutoUpdate = false;
    scene.add(fieldMesh);
  
    positionScoreElement();
  
    if (config.trees) {
      const tree1 = Tree();
      tree1.position.x = arcCenterX * 1.3;
      scene.add(tree1);
  
      const tree2 = Tree();
      tree2.position.y = arcCenterX * 1.9;
      tree2.position.x = arcCenterX * 1.3;
      scene.add(tree2);
  
      const tree3 = Tree();
      tree3.position.x = arcCenterX * 0.8;
      tree3.position.y = arcCenterX * 2;
      scene.add(tree3);
  
      const tree4 = Tree();
      tree4.position.x = arcCenterX * 1.8;
      tree4.position.y = arcCenterX * 2;
      scene.add(tree4);
  
      const tree5 = Tree();
      tree5.position.x = -arcCenterX * 1;
      tree5.position.y = arcCenterX * 2;
      scene.add(tree5);
  
      const tree6 = Tree();
      tree6.position.x = -arcCenterX * 2;
      tree6.position.y = arcCenterX * 1.8;
      scene.add(tree6);
  
      const tree7 = Tree();
      tree7.position.x = arcCenterX * 0.8;
      tree7.position.y = -arcCenterX * 2;
      scene.add(tree7);
  
      const tree8 = Tree();
      tree8.position.x = arcCenterX * 1.8;
      tree8.position.y = -arcCenterX * 2;
      scene.add(tree8);
  
      const tree9 = Tree();
      tree9.position.x = -arcCenterX * 1;
      tree9.position.y = -arcCenterX * 2;
      scene.add(tree9);
  
      const tree10 = Tree();
      tree10.position.x = -arcCenterX * 2;
      tree10.position.y = -arcCenterX * 1.8;
      scene.add(tree10);
  
      const tree11 = Tree();
      tree11.position.x = arcCenterX * 0.6;
      tree11.position.y = -arcCenterX * 2.3;
      scene.add(tree11);
  
      const tree12 = Tree();
      tree12.position.x = arcCenterX * 1.5;
      tree12.position.y = -arcCenterX * 2.4;
      scene.add(tree12);
  
      const tree13 = Tree();
      tree13.position.x = -arcCenterX * 0.7;
      tree13.position.y = -arcCenterX * 2.4;
      scene.add(tree13);
  
      const tree14 = Tree();
      tree14.position.x = -arcCenterX * 1.5;
      tree14.position.y = -arcCenterX * 1.8;
      scene.add(tree14);
    }
  }
  