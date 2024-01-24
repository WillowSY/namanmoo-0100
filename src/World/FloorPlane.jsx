import * as THREE from 'three'
import {RigidBody} from '@react-three/rapier'


export default function FloorPlane(){
    const planeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const planeMaterial = new THREE.MeshStandardMaterial({color: 'brown', transparent :true, opacity: 0});
    return <>
        <RigidBody type ="fixed" colliders="hull" restitution={0} friction={0}>
            <mesh geometry={planeGeometry} material = {planeMaterial} position={[0, -0.5, 0]} scale={[100, 1, 100]} transparent={true} opacity={0}/>
        </RigidBody>
        {/*<RigidBody type ="fixed" colliders="hull" restitution={0} friction={0}>
            <mesh position={[-(unitWidth*2-centerWidth),-0.25 ,-(unitHeight*3+centerHeight) ]} scale={[unitWidth*4, 0.25, unitHeight*8]} receiveShadow>
                <boxGeometry/>
                <meshStandardMaterial color="brown"/>
            </mesh>
</RigidBody>*/}
    </>
}