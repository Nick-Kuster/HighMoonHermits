import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

const useStyles = makeStyles(theme => ({
    root: {
        display:'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',
        opacity: .98
    },    
    paperHeader: {
        padding: theme.spacing(4),     
        margin: 'auto',
        opacity: .98,
        background: '#ddd'
    },
    paper: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        padding: theme.spacing(4),
        background:  theme.palette.primary.main,
        margin: 'auto',
        maxWidth: '100%',
        minHeight: '100%',
        width:'100%',
        alignContent: 'center',
        justifyContent: 'space-around'
    },
    videoContainer: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    videoHeader: {
        marginBottom: 75,
        maxHeight: 20
    },
    video: {
        marginBottom: 50
    },
    imageFit: {
        width: '100px',
        height: '100px',
        maxWidth: '100%',
        height: 'auto'
    }
}));

function Video ({ link, headerImage}){
    const classes = useStyles();
    return(        
        <div className={classes.videoContainer}>         
            <Header image={headerImage} variant='subHeader'/>
            <iframe className={classes.video} 
                    width='560'
                    height='315' 
                    src={link}
                    frameBorder="0" 
                    allow='autoplay; encrypted-media'
                    allowFullScreen
            />  
        </div>             
    )
}

function VideoGrid() {
    const classes = useStyles();
    const playlistId = 'PLLB2v7B6Fp2K6lPkCA06goPmN0_e_YDHr';
    const featuredVideoLink = 'https://www.youtube.com/embed/Y8DO47Ucp2g';
    const videoBanner = 'https://i.imgur.com/czDax4V.png';
    const featured = 'https://i.imgur.com/L2G6sXf.png';
    const playlist ='https://i.imgur.com/stWfrRy.png'
    return(
    <React.Fragment>
       <Header image={videoBanner}/>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Video link={featuredVideoLink} headerImage={featured}/>             
                <Video link={`https://www.youtube.com/embed/videoseries?list=${playlistId}`} headerImage={playlist}/>           
            </Paper>
        </div>
        </React.Fragment>
       
    )
}

export default class Videos extends React.Component{
    render(){
        return (
            <React.Fragment>
                <VideoGrid />
            </React.Fragment>
        )
    }
}
