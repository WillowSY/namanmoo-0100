import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import FloorBlock from './World/FloorBlock.jsx'
import {Physics} from '@react-three/rapier'
import CurveRoad from './World/CurveRoad.jsx'
import Player from './Player.jsx'
import FloorPlane from './World/FloorPlane.jsx'
export default function Experience()
{
    const unitWidth = 4
    const unitHeight = 4
    const numTrackWidth = 4
    const numTrackHeight= 8
    const centerWidth  = unitWidth/2
    const centerHeight = unitHeight/2
    return <>

        <OrbitControls makeDefault />

        <Lights />

        
        <Physics>
            <FloorPlane/>
            <Player/>
            {/* Left path component 분리 필요*/}
            <FloorBlock position={[0, 0, -8]}/>
            <FloorBlock position={[0, 0, -12]}/>
            <FloorBlock position={[0, 0, -16]}/>
            <FloorBlock position={[0, 0, -20]}/>
            {/* Right path component 분리 필요*/}
            <FloorBlock position={[-12, 0, -8]}/>
            <FloorBlock position={[-12, 0, -12]}/>
            <FloorBlock position={[-12, 0, -16]}/>
            <FloorBlock position={[-12, 0, -20]}/>

            {/* torus curve */}
            {/* <CurveRoad position={[-6, -1.5, -6]} rotation={[Math.PI/2, 0, 0]}/>
            <CurveRoad position={[-6, -1.5, -22]} rotation={[Math.PI/2, 0, Math.PI]}/> */}
            {/* Front curve*/}
            
            <CurveRoad position={[-6, 0.25, -6]} rotation={[-Math.PI/2,0,Math.PI ]}/>
            <CurveRoad position={[-6, 0.25, -6]} rotation={[-Math.PI/2,0,Math.PI/2 ]}/>
            <CurveRoad position={[-6, 0.25, -22]} rotation={[-Math.PI/2,0, 0]}/>
            <CurveRoad position={[-6, 0.25, -22]} rotation={[-Math.PI/2,0, -Math.PI/2]}/> 
        </Physics>
        
        
        
        

    </>
}