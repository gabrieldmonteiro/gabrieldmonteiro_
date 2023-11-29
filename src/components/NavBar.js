import { Link } from 'react-router-dom'
import '../style/navBar.css'

const NavBar = () => {
    return (<>

        <div className='navStyle'>
            <nav>
                <ul>
                    <li>
                        <Link to="/gabrieldmonteiro_/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/gabrieldmonteiro_/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>        
    </>
    )
}

export default NavBar