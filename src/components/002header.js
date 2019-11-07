import React from 'react';
import PropTypes from 'prop-types';

//import './specific.css';

const Header = (props) => {
    const {title} = props;
    return (
        <div>
            <h1 style={headingStyle}> {title} </h1>
            {/* <h1 style={{ color:'green', fontSize:'50px' }}> {title} </h1> */}
        </div>
    );
};

Header.defaultProps = {
    title : '!My App'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

const headingStyle = {
    color: 'red',
    fontSize: '50px'
};

export default Header;