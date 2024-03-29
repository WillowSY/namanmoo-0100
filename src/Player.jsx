import * as THREE from 'three'
import {useRapier, RigidBody} from '@react-three/rapier'
import {useFrame} from '@react-three/fiber'
import {useKeyboardControls} from '@react-three/drei'
import {useState, useRef} from 'react'

export default function Player(){
    const body = useRef()
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const {rapier, world} = useRapier()

    const [smoothedCameraPosition] = useState(()=> new THREE.Vector3(10, 10, 10))
    const [smoothedCameraTarget] = useState(()=> new THREE.Vector3())

    useFrame((state, delta)=>
    {
        const {forward, backward, leftward, rightward} = getKeys()
        
        const impulse = {x:0, y:0, z:0}
        const torque = {x:0, y:0, z:0}

        const impulseStrength = 0.6*delta
        const torqueStrength = 0.2*delta

        if(forward){
            impulse.z -= impulseStrength
            torque.x -= torqueStrength 
        }

        if(rightward){
            impulse.x += impulseStrength
            torque.z -= torqueStrength 
        }

        if(backward){
            impulse.z += impulseStrength
            torque.x += torqueStrength 
        }

        if(leftward){
            impulse.x -= impulseStrength
            torque.z += torqueStrength 
        }

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)

        const bodyPosition = body.current.translation()
        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 2.25
        cameraPosition.y+= 0.65

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.25

        state.camera.position.copy(cameraPosition)
        state.camera.lookAt(cameraTarget)

        smoothedCameraPosition.lerp(cameraPosition, 5*delta)
        smoothedCameraTarget.lerp(cameraTarget, 5*delta)
    })
    
    return <RigidBody
        ref={body}
        canSleep={ false }
        colliders="ball"
        restitution={0.2}
        friction={1}
        linearDamping={0.5}
        angularDamping={0.5}
        position={[0, 1, -12]}>
        <mesh castShadow>
            <icosahedronGeometry args={[0.3, 1]}/>
            <meshStandardMaterial flatSahding color="mediumpurple" />
        </mesh>
    </RigidBody>
}