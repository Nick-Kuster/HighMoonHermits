import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import PageTemplate from './PageTemplate';
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
    videoHeader: {
    },
    videoContainer: {       
        height:'315px'
    },
    videoContainerMobile: {
        height: '500px',
        width: '100%'
    },
    imageFit: {
        width: '100px',
        height: '100px',
        maxWidth: '100%',
        height: 'auto'
    }
}));

function Video ({ link, headerImage, width}){
    const classes = useStyles();
    const mobile = width < 500;
    return(     
        <React.Fragment>
            <div className={mobile ? classes.videoContainerMobile : classes.videoContainer}>
                <Header image={headerImage} variant='subHeader'/>
                <iframe className={mobile ? classes.videoMobile : classes.video} 
                        src={link}
                        width= {mobile ? '100%' : '560px'}                  
                        height= {mobile ? '100%' : '315px'}
                        frameBorder='0' 
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                /> 
            </div>
            
        </React.Fragment>     
                      
    )
}

function VideoGrid({ width }) {
    const classes = useStyles();
    const playlistId = 'PLLB2v7B6Fp2K6lPkCA06goPmN0_e_YDHr';
    const featuredVideoLink = 'https://www.youtube.com/embed/Y8DO47Ucp2g';
    const videoBanner = 'https://i.imgur.com/czDax4V.png';
    const featured = 'https://i.imgur.com/L2G6sXf.png';
    const playlist ='https://i.imgur.com/stWfrRy.png';
    return(
    <PageTemplate banner={ videoBanner } width={ width }>
        <Video link={featuredVideoLink} width={width} headerImage={featured}/>             
        <Video link={`https://www.youtube.com/embed/videoseries?list=${playlistId}`} width={width} headerImage={playlist}/>      
    </PageTemplate>
       
    )
}

export default class Videos extends React.Component{
    state = {    
        width: 500
    } 
    
    componentDidMount(){        
        this.setState({ width: screen.width });
    }

    render(){
        const{ width } = this.state
        return (
            <VideoGrid width={width}/>
        )
    }
}