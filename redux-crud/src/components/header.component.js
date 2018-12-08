import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    
    render(){ 
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
                <h3>
                    <Link to={'/'} className="text-light">
                        CRUD - React, Redux, Rest API & Axios
                    </Link>
                </h3>
                <Link 
                    to={'/productos/nuevo'} 
                    className="btn btn-danger nuevo-post">
                        Agregar producto &#43;
                </Link>
            </nav>
        );
    }
}
export default Header