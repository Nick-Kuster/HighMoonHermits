import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Tooltip, Paper } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MediaConsumer } from '../contexts/media';

const useStyles = makeStyles(theme => ({
    socialMedia: {            
        display: 'flex',    
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-End'
    },
    banner: { 
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

function SocialMediaButton({ title }){
    const classes = useStyles();

    return(
        <Tooltip title={title}>
            <Button className={classes.button}>
                    {{
                        'Facebook': <FacebookIcon style={{ fontSize: 80}}/>,
                        'Youtube': <YouTubeIcon style={{ fontSize: 80}}/>,
                        'Instagram': <InstagramIcon style={{ fontSize: 80}}/>,
                        'Twitter': <TwitterIcon style={{ fontSize: 80}}/>
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
                <Paper className={classes.banner}>      
                    <SocialMediaButton title='Facebook'/>  
                    <SocialMediaButton title='Youtube'/>    
                    <SocialMediaButton title='Instagram'/>    
                    <SocialMediaButton title='Twitter'/>       
                </Paper>
            )}
        </MediaConsumer>
    )
}