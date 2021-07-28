import React from 'react';
import {Container, TextField, InputAdornment, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
                paddingRight: '0',
                paddingLeft: '1rem',
                borderRadius: '0.7rem 0 0 0.7rem'
            },
            "& .MuiFilledInput-input": {
                borderBottom: "0 !important",
                marginBottom: "0 !important",
                // borderRadius: '2% 0 0 2% !important'
            }
        },
        button: {
            padding: '1rem',
            marginRight: '-0.7rem',
            background: '#000000',
            borderRadius: '0 0.7rem 0.7rem 0',
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
                                    <IconButton type="submit" className={classes.button}>
                                        <img src={process.env.PUBLIC_URL + "/icon-arrow.svg"} alt="search button"/>
                                    </IconButton>
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