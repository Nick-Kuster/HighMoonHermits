import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Tooltip, Paper } from '@material-ui/core';
import { MediaConsumer } from '../contexts/media';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles(theme => ({
    container: { 
        display: 'flex',
        justifyContent: 'space-around',
        opacity:.98,
        alignItems: 'center',
        height: '10vh',
        padding: '12px',
        borderRadius: '3px',
        background:  '#ddd',
        
    },
    button: {
        height: '100%',
        width: '100%',
        marginBottom: '10px',
        padding: '10px'
    }
}))

function SocialMediaButton({ title, link }){
    const classes = useStyles();

    return(
        <Tooltip title={title}>
            <Button className={classes.button} href={link} target='_blank'>
                {{
                        'Facebook': <SocialIcon network='facebook' />,
                        'Youtube': <SocialIcon network='youtube'/>,
                        'Instagram': <SocialIcon network='instagram' />,
                        'Twitter': <SocialIcon network='twitter' />,
                        'SoundCloud': <SocialIcon network='soundcloud'/>
                    }[title]}
            </Button>
        </Tooltip>
    )
}

export default function SocialMedia() {
    const classes = useStyles();
    return(
        <MediaConsumer>         
            {({ width, height }) => (                
                <Paper className={classes.container}>      
                    <SocialMediaButton title='Facebook' link='https://www.facebook.com/highmoonhermits/'/>  
                    <SocialMediaButton title='Youtube' link='https://www.youtube.com/channel/UCeoV7DA6emiIuIRU0CmQ7Hw'/>    
                    <SocialMediaButton title='Instagram' link='https://www.instagram.com/highmoonhermits/'/>    
                    <SocialMediaButton title='Twitter' link='https://twitter.com/HermitsHigh'/>     
                    <SocialMediaButton title='SoundCloud' link='https://soundcloud.com/highmoonhermits'/>  
                </Paper>
            )}
        </MediaConsumer>
    )
}