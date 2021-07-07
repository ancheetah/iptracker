import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Box, Grid, Divider} from '@material-ui/core';

const useStyles = makeStyles({
    statBox: {
      padding: '1.5rem',
      margin: '2rem 6rem'
    },
    statItem: {
        padding: '0 1.5rem',
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
    }
  });

const Stats = (props) => {
    const styles = useStyles();
    const stats = props.ipStats;

    const StatCard = (props) => {
        return (
            <Grid item xs align="left" className={styles.statItem}>
                <Typography variant="overline" component="h6" color="textSecondary">
                    {props.name}
                </Typography>
                <div className={styles.description}>
                    {props.description}
                </div>
            </Grid>
        )
    }

    return (
        <Box border={1} borderColor="grey.400" borderRadius={10} className={styles.statBox}>
            <Grid container>
                <StatCard name="IP Address" description={stats.ip}/>
                <Divider orientation="vertical" flexItem/>
                <StatCard name="Location" description={stats.location}/>
                <Divider orientation="vertical" flexItem/>
                <StatCard name="Timezone" description={stats.timezone}/>
                <Divider orientation="vertical" flexItem/>
                <StatCard name="ISP" description={stats.isp}/>
            </Grid>
        </Box>
    );
}

export default Stats;