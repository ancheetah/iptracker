import React from 'react';
import {Container, TextField, InputAdornment, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
        header: {
            color: 'white',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/pattern-bg.png'})`,
            padding: '4rem',
            height: 250,
        },
        input: { 
            
            "& .MuiFilledInput-root": {
                background: 'rgba(255, 255, 255, 1)',
            },
            "& .MuiFilledInput-input": {
                borderBottom: "0 !important",
                marginBottom: "0 !important",
                paddingLeft: '1rem !important',
            }
        }
    }
);

const Header = (props) => {
    const classes = useStyles();
    const handleChange = (event) => {
        props.setUserInput(event.target.value);
    }
    return (
        <header className={classes.header}>
            <h2 style={{"marginTop":0, "fontSize":"20pt"}}>IP Address Tracker</h2>

            <Container maxWidth="sm">
                <form onSubmit={props.handleSubmit}>
                    <TextField 
                        fullWidth
                        variant="filled"
                        color="secondary"
                        placeholder="Search for any IP address or domain"
                        onChange={handleChange}
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: 
                                <InputAdornment position="end">
                                    <IconButton type="submit"><SearchIcon/></IconButton>
                                </InputAdornment>
                            }}
                        InputLabelProps={{
                            disableUnderline: true,
                        }}
                        className={classes.input}
                    />
                </form>
            </Container>
        </header>
    );
}

export default Header;