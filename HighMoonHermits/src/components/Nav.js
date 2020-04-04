import React from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Avatar, Drawer,Grid, Button, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SoundCloud from './SoundCloud';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { MediaConsumer } from '../contexts/media';

const hermanUrl = 'https://i.imgur.com/jOeu3qK.png';
const useStyles = makeStyles(theme => ({
    appBar:{
        marginBottom:'0px',
        background: theme.palette.primary.dark,
        paddingLeft: '50',
        paddingRight: '50',
        paddingBottom: '10',
        paddingTop: '10',
        opacity: .85,
        '& h6': {
           color: "#fff"
        }
    },
    avatar: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    drawer: {
        background: '#ddd'
    },
    navLink: {
        background: theme.palette.primary.main,
        padding: '20',
        width: '100%'
    },
    navLinkNoBg: {
        padding: '20',
        width: '100%'
    },
    navGridItem: {
        marginTop: '5'        
    }
}));

const activeStyle = {
    background: '#787469'
}


function NavButton({ path, text }){        
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid item md={1} className={classes.navGridItem} >                  
                <NavLink 
                    to={path}
                    exact
                    activeStyle={activeStyle}
                    component={Button}
                    className={classes.navLink}
                >
                    <Typography variant="h6" >{text}</Typography>      
                </NavLink>
            </Grid >    
        </React.Fragment>        
    )        
}

function DesktopNav() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return(
        <React.Fragment>
            <Paper className={classes.appBar}>
                <Grid container spacing={1}  justify="space-between">  
                    <Grid item md={1}>
                        <img className={classes.avatar} src={hermanUrl}/>
                    </Grid>
                    <NavButton path='/' text='Home'/>
                    <NavButton path='null' text='About'/>
                    <NavButton path='/videos' text='Videos'/>
                    <NavButton path='null' text='Photos'/>
                    <NavButton path='null' text='Store'/> 
                    <NavButton path='null' text='Contact'/>
                    <Grid item md={1} className={classes.navGridItem}>
                        <Button className={classes.navLinkNoBg} 
                                onClick={handleDrawerOpen}>
                                <Typography  variant="h6" >Playlist <QueueMusicIcon/></Typography>       
                        </Button>      
                    </Grid>
                </Grid>  
            </Paper>                      
            <Drawer        
                classes={{paper: classes.drawer}}   
                variant="persistent"
                anchor="right"
                open={open}
            >
                <div  className={classes.drawer}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <div>
                        <SoundCloud/>
                    </div>
                </div>               
            </Drawer>
            <Toolbar id='back-to-top-anchor'/>   
        </React.Fragment>
                
    )
}

export default function Nav (){
    

      

    return(
        <MediaConsumer>         
            {({ width }) => (
                width > 500 ? <DesktopNav/> : <div>mobile</div>
            )} 
                  
        </MediaConsumer>
       
    )
}

{/*      */}