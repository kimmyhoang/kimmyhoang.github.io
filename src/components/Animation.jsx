import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Experience()
{
    const moonRef = useRef()
    const moon = useGLTF('/models/moon.glb')

    useFrame((state, delta) => {
        if(moonRef.current) {
            moonRef.current.rotation.y += delta * 0.1
        }
    })

    return <>
     
        <group position={[0, 0, 2]}>
            <primitive 
                ref={moonRef}
                object={moon.scene}
                scale={0.60}
                position={[0, 0, 0]}
            />
        </group>

        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
    </>
}