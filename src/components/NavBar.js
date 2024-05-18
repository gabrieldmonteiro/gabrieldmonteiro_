import { Link } from 'react-router-dom'
import '../style/navBar.css'

const NavBar = () => {
    return (<>

        <div className='navStyle'>
            <nav>
                <ul>
                    <li>
                        <Link to="/gabrieldmonteiro_/projects" className='prevent-select'>Projects</Link>
                    </li>
                    <li>
                        <Link to="/gabrieldmonteiro_/contact" className='prevent-select'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>        
    </>
    )
}

export default NavBar