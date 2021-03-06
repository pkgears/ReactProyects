import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return(
        <header className="text-center">
            <h1>{props.titulo}</h1>
        </header>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;