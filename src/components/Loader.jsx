import React, { useEffect, useState, useRef } from 'react';
import About from './About.jsx'
import { Canvas } from '@react-three/fiber';
import Animation from './Animation.jsx';

export default function Loader() {
    const [showImg, setShowImg] = useState(true);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        
        const visitedBefore = localStorage.getItem('visitedBefore');
        if (visitedBefore) {
            setShowImg(false); 
        } else {
            setTimeout(() => {
                setShowImg(false);
                setAnimationTriggered(true);
                localStorage.setItem('visitedBefore', 'true'); 
            }, 3000);
        }
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
                            className={`canvas-wrapper`}
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

