import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

interface Props {
    
}

const Navigation = (props: Props) => {
    return (
        <nav className='menu'>
            <a><b><NavLink to="/">Products</NavLink></b></a>
            <a><NavLink to="/likes">Likes</NavLink></a>
        </nav>
    )
}

export default Navigation
