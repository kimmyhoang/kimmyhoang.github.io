import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './components/experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas>
            <Experience />
        </Canvas>
    </>
)