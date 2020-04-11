import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip, Paper } from '@material-ui/core';
import Quote from './Quote'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MediaConsumer } from '../contexts/media';
const shadowHermit = 'https://i.imgur.com/aOO396J.png';
const useStyles = makeStyles(theme => ({
    banner: { 
        display: 'flex',
        justifyContent: 'space-around',
        opacity:.98,
        alignItems: 'center',
        height: '20vh',
        padding: '12px',
        borderRadius: '3px',
        background:  '#ddd',
        
    },
    imageContainer:{
        flex: 1,
        height: '100%',
        objectFit: 'contain'
    },
    quoteImageContainer:{
        display: 'flex',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    quote: {
        flex: 1,
        marginTop: '20px'
    }
}));
  
export default function Banner() {
    const classes = useStyles();
    return(
        <MediaConsumer>         
            {({ width, height }) => (
                <React.Fragment>
                    <Paper className={classes.banner}> 
                        <div className={classes.quoteImageContainer}>
                            <div className={classes.quote}>
                                <Quote />
                            </div>
                            <div className={classes.imageContainer}>
                                <img  className={classes.image} src={shadowHermit}/>   
                            </div>
                        </div>                           
                    </Paper>
                </React.Fragment>
            )}
        </MediaConsumer>
    )
}