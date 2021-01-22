import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (<>
    <header>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
        </ul>
    </header>
</>);

export default Nav;