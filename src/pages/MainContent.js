import React, { useCallback } from 'react';
import '../style/mainStyle.css'
import NavBar from '../components/NavBar'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";



const MainContent = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div>       
            <Particles options={particlesOptions} init={particlesInit}/>    
            <NavBar/>
            <h1>gabrieldmonteiro</h1>
            <h3>A page to showcase my projects.</h3>
        </div>
    )
}

export default MainContent