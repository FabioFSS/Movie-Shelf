import React, { useState } from 'react';
import '../styles/NavItem.css';


function NavItem(props) {

    const [open, setOpen] = useState(false);
    return (
        <li className='nav-item'>
            <a href="#"  onClick={() => setOpen(!open)}>
                <img src={props.icon} className='icon-button' />
            </a>

            {open && props.children}
        </li>
    );
}

export default NavItem;