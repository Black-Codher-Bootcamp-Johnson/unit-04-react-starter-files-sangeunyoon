import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <header>
        <h1>Bookcase</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/bookcase" className={({isActive}) => isActive ? 'active' : ''}>Bookcase</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
                </ul>
            
        </nav>
        </header>
    );
}

export default Header;