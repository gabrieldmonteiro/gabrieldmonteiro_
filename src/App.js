import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainContent from './pages/MainContent';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {    
    return (        
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/gabrieldmonteiro_/" element={ <MainContent/> }/>
                    <Route path="/gabrieldmonteiro_/projects" element={<Projects/>}/>
                    <Route path="/gabrieldmonteiro_/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>           
            
        </div>
    );
}

export default App;
