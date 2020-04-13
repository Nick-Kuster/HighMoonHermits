import React from 'react'
import { Typography, Paper } from '@material-ui/core';
import SocialMedia from './SocialMedia';
import PageTemplate from './PageTemplate'
import { MediaConsumer } from '../contexts/media';
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '50vh',
        backgroundColor: theme.palette.secondary.light
    },
    socialIconsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%'
    }
}))


export default function About (){   
    
    const classes = useStyles()

    return(
        <MediaConsumer>         
        {({ width }) => (
            <PageTemplate width={ width }>    
                <Paper color={ '#fff' } className={classes.paper}>
                    <Typography variant='h3'>
                        For booking or for any and all inquiries:  
                    </Typography>
                    <Typography variant='h3'>
                        HighMoonHermits@gmail.com
                    </Typography>
                    <Typography variant='h3'>
                        Or find us on Social Media:
                    </Typography>
                    <SocialMedia style={{width: '100%'}}/>
                </Paper>               
            </PageTemplate>
        )}
        </MediaConsumer>
    )
}