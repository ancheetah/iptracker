import React from 'react';
import {Container, TextField, InputAdornment, IconButton, Icon} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    color: "white",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/pattern-bg.png'})`,
    height: 250,
}

const Header = (props) => {
    return (
        <header style={styles}>
            <h2>IP Address Tracker</h2>

            <Container maxWidth="sm">
                <form action="" noValidate>
                    <TextField 
                        fullWidth
                        variant="filled"
                        label="Search for any IP address or domain"
                        InputProps={{
                            endAdornment: 
                                <InputAdornment position="end">
                                    <IconButton color="primary"><SearchIcon/></IconButton>
                                </InputAdornment>
                            }}
                    />
                </form>
            </Container>
        </header>
    );
}

export default Header;