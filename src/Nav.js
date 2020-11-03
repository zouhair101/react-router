import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav id="nav-links">
            <h3>Logo</h3>
           
            <ul>
                <li> <Link to="/about"> About </Link> </li>  
                <li><Link to="/shop"> Shop  </Link></li> 
            </ul>
        </nav>
    )
}
