import React, { useCallback } from 'react';
import '../../style/mainPageStyle.css'
import NavBar from '../../components/NavBar'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";



const MainContent = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <>
            <div className='responsive-div'>
                <div className='mainStyle'>
                    <div class="container">
                        <NavBar />
                        <Particles options={particlesOptions} init={particlesInit} />
                        <h1 className='prevent-select'>gabrieldmonteiro</h1>
                        <h3 className='prevent-select'>A page to showcase my projects.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent
