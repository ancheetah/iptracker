import React from 'react';
import {Container, Grid} from '@material-ui/core';

const Stats = (props) => {
    return (
        <div>
            <p>
                {
                    props.data
                    ?
                    JSON.stringify(props.data)
                    :
                    ""
                }
            </p>
            <Container>

            </Container>
        </div>
    );
}

export default Stats;