import './CSS/Navbar.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import info_icon from './assets/images/icons8-info-24.png'
import braces_icon from './assets/images/icons8-curly-brackets-50.png'
import Iconbar from './Iconbar';
import resume from './assets/files/Resume.pdf'
import file_icon from './assets/images/icons8-file-50.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import ContactMe from './ContactMe';
import down_arrow from './assets/images/icons8-down-arrow-50.png'
import side_arrow from './assets/images/icons8-arrow-right-50.png'



function Navbar(props) {
    const [arrow, setArrow] = useState(side_arrow);
    const [close, setClose] = useState(1);
    function clickhandler() {
        if (close) {
            setClose(0);
            setArrow(down_arrow);

        } else {
            setClose(1);
            setArrow(side_arrow);
        }
    };



    return (
    <Router>
        <div className='everything'>
            
            
            <Iconbar />
            
        
            <div className='navbar'>
                <div className='EXPLORER'>
                    <h1>EXPLORER</h1>
                </div>
                <div className='Editors'>
                    <h1>OPEN EDITORS</h1>
                </div>
                <nav>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='navitem'>
                        <img alt = '' src={info_icon}></img>
                        <div className='text'>
                            About Me
                        </div>
                    </div>
                    </Link>
                    <Link to='/projects' style={{ textDecoration: 'none' }}>
                        <div className='navitem'>
                            <img alt='' src={braces_icon}></img>
                            <div className='text'>
                                Projects
                            </div>
                        </div>
                    </Link>

                    <a href={resume} onClick={()=> {return alert('Resume Downloaded! 😀')}} download="Mehul's Resume" style={{ textDecoration: 'none' }}>
                        <div className='navitem'>
                            <img alt='' src={file_icon}></img>
                            <div className='text'>
                                Resume
                            </div>
                        </div>
                    </a>

                    
                    <button onClick={clickhandler}>
                        <div className='navitem'>
                            <img alt='' src={arrow}></img>
                            <div className='text'>
                                Contact Me
                            </div>
                        </div>
                    </button>

                    <ContactMe close={close}/>
                
                </nav>                
            </div>
        
        </div>



        <div className='main-content'>
            <Routes>
                <Route path='/' element={<AboutMe page = {props.page} changePage = {props.changePage}/>}></Route>
                <Route path='/projects' element={<Projects page = {props.page} changePage = {props.changePage}/>}></Route>
            </Routes>
        </div>
    </Router>
    );
}

export default Navbar;