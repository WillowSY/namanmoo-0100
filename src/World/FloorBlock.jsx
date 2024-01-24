
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {useRapier, RigidBody} from '@react-three/rapier'
// import AxesHelperWrapper from '../Wrapper/AxesHelperWrapper'

const floorGeometry = new THREE.BoxGeometry(1, 1, 1)
const roadGeometry = new THREE.BoxGeometry(1, 1, 1)
const floorMaterial = new THREE.MeshStandardMaterial({color: 'yellowgreen'})
const roadMaterial = new THREE.MeshStandardMaterial({color: 'slategrey'})

/*
 floor plane component 분리 필요
export function FloorPlaneBlock(position){
    return (
        <mesh geometry={floorGeometry} material={floorMaterial} position={[position[0], position[1], position[2]]} scale={[4, 0.25, 4]} receiveShadow />
    );
}*/
export default function FloorBlock({position}){      
    return (<>
        
        <RigidBody type = "kinematicPosition" restitution={0} friction={ 0 }>
            <mesh geometry={floorGeometry} material={floorMaterial} position={[position[0], position[1], position[2]]} scale={[4, 0.25, 4]} receiveShadow />
            <mesh geometry={roadGeometry} material= {roadMaterial} scale={[2, 0.5, 4]} position={[position[0], position[1], position[2]]} receiveShadow castShadow/>                 
        </RigidBody>
    </>
    );
}