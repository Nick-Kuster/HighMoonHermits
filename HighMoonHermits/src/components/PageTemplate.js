import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Header from './Header';
import Playlist from './Playlist';

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
paperVertical: {
    background:  theme.palette.primary.main,
    paddingBottom: '50px',
    opacity: .95,
    maxWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start', 
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center'
}
}))

export default function PageTemplate({banner, width, children}){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header image={banner}/>
            <Playlist/>
            <Paper className={width > 500 ? classes.paper : classes.paperVertical}>
                {children}
            </Paper>
        </React.Fragment>
    )
}