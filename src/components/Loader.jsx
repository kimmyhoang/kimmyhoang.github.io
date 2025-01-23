import React, { useEffect, useState } from 'react';
import About from './About.jsx'
import { Canvas } from '@react-three/fiber';
import Animation from './Animation.jsx';
import './Loader.css'; 

export default function Loader() {
    const [showImg, setShowImg] = useState(true);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setShowImg(false)
            setAnimationTriggered(true);
        }, 3000)
    },[])

    return(
        <>
            <div>
                {
                    showImg ? (
                        <>
                        
                        <About />
                        <div className="loading">
                            <img src="../images/ellipsis.svg" width="50%" height="50%"/>
                        </div>
                        </>
                    ) : (
                        <>
                        <About />
                        <div
                            className={`canvas-wrapper ${
                                animationTriggered ? 'fade-in' : ''
                            }`}
                        >
                        <Canvas
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 1000,
                            position: [0, 0, 5]
                        }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                        >
                            <Animation />
                        </Canvas>
                        </div>
                    </>
                    )
                }
            </div>
        </>
    )
}

