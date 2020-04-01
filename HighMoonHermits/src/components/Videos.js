import React from 'react'
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const hermanUrl = 'https://lh3.googleusercontent.com/qojlwm1eAkuK1DhcmsXeMFHVbFUy1fwWnEMtQn2z2m031TQiq_fN4Q_KERZVe0w7uBuJFOBGXY3-xOXhCxCg7yIbeJe7Rgc4cmOwn0FzTFf4-HLsDAefJ83x5vwKQY3_Oh9BCFva7FVxZflSBYchj9W2mnBzE0oOGVQX48Usk8CHyGZpSDJ2TaLN3zAI8w5DACSwPauRUILB7PUkofBvu31wk323CXUQ-iEyYC04dGIqoL6JdaApvPxmz870ljdwiqOaCMqkecRfKv_csJnMRaVHtjaHW3fgKY-Sqbpg9H48TzVK0MS4o6wWk_u_XijbELzUYRFGsXUp3qoGYu5_1XPaM9tOUNU2fyMtE-akr6hs4m5J1P3XZs06iCSZzyuCCyOds1Oewb0ZP_pG3Lje5XfiaQWclEIFFPrJfioLqZfnUHHbOZocJMrjXnbFhW6N5AZ1wThgFzdlV6Pu67JOQub1-D9xDS-nDBeSrlQpHUk1pJdzcYMLOJoP9qC2p-nxt_oiiYAs7evUQ2a4cuFytVOog4OemvXyliZiXeVRLmfHrFzbUOXVYKWEFpxTPYeisk1DfQy_tQX-kBR4UcE-LzyxHk9OPTRH3iU1_LpzV5u58z7SUQGNYKZvKhAwk67kRlX-7VipUkes6zJJtdVwfnTNpiUE53FKgaMTsZhTx1pFjtSJi43CuIoMi69f=w899-h853-no';
const useStyles = makeStyles(theme => ({
    root: {
        display:'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',
        opacity: .98
    },    
    paperHeader: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        padding: theme.spacing(4),     
        margin: 'auto',
        alignContent: 'center',
        justifyContent: 'space-around',
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

function Video ({ link, headerTitle}){
    const classes = useStyles();
    return(        
        <div className={classes.videoContainer}>  
       
        <iframe className={classes.video} 
                width='560'
                height='315' 
                src={link}
                frameBorder="0" 
                allow='autoplay; encrypted-media'
                allowFullScreen
        />  
        <Typography className={classes.videoHeader} variant='h2'>
                {headerTitle}
        </Typography> 
        </div>             
    )
}

function VideoGrid() {
    const classes = useStyles();
    const playlistId = 'PLLB2v7B6Fp2K6lPkCA06goPmN0_e_YDHr';
    const featuredVideoLink = 'https://www.youtube.com/embed/Y8DO47Ucp2g'
//http://localhost:8080/app/images/JustHerman.png
    return(
        <React.Fragment>
        <Paper className={classes.paperHeader}>            
            <img className={classes.imageFit} src={hermanUrl}/>
            <Typography variant='h1'>
                Videos
            </Typography>            
            <img className={classes.imageFit} src={hermanUrl}/>
        </Paper>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Video link={featuredVideoLink} headerTitle='Featured'/>             
                <Video link={`https://www.youtube.com/embed/videoseries?list=${playlistId}`} headerTitle='Playlist'/>           
            </Paper>
        </div>
        </React.Fragment>
       
    )
}

export default class Videos extends React.Component{
    state = {
        folderPath: null,
        videos: [],
        error: null
    } 

    render(){
        // const {videos} = this.state      

        return (
            <React.Fragment>
                <VideoGrid />
            </React.Fragment>
        )
    }
}
