import React, { useState } from 'react';
import '../styles/NavItem.css';


function NavItem(props) {

    const [open, setOpen] = useState(false);
    return (
        <li className='nav-item'>
            <a href="#" className='icon-button' onClick={() => setOpen(!open)}>
                <img src={props.icon} />
            </a>

            {open && props.children}
        </li>
    );
}

export default NavItem;