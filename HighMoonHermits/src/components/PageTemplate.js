import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Header from './Header';

const background = 'https://i.imgur.com/DzgIdCj.jpg';
const useStyles = makeStyles(theme => ({
paper: {
    padding: theme.spacing(4),
    background:  theme.palette.primary.main,
    margin: 'auto',
    opacity: .95,
    maxWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'space-around'   
},
}))

export default function PageTemplate({banner, children}){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header image={banner}/>
            <Paper className={classes.paper}>
                {children}
            </Paper>
        </React.Fragment>
    )
}