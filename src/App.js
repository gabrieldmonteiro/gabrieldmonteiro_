import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import MainContent from './components/MainContent';


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (        
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <MainContent/>
        </div>
    );
}

export default App;
