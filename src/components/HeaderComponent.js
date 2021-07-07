import React from 'react';

const styles = {
    color: "white",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/pattern-bg.png'})`,
    height: 250,
}

const Header = (props) => {
    return (
        <header style={styles}>
            <h2>IP Address Tracker</h2>
        </header>
    );
}

export default Header;