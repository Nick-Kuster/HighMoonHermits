import React from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, IconButton, AppBar, Drawer,Grid, Button, Paper, ClickAwayListener } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SoundCloud from './SoundCloud';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Videos from './Videos';
import Home from './Home';
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
    mobileAppBar: {
        top: 'auto',
        bottom: 0,
        height: '15%'
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
       
        padding: '20',
        width: '100%'
    },
    navLinkNoBg: {
        padding: '20',
        width: '100%'
    },
    navGridItem: {
        marginTop: '5'        
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto'
    },
    selected: {
       background: theme.palette.primary.light
    },
    unselected: {
    }
}));

function NavButton({ page, selectedPage, onUpdatePage }){        
    const classes = useStyles();
    return(
        <Grid item md={1} className={classes.navGridItem} >     
            <Button variant='contained' color='primary' className={page === selectedPage ? classes.selected : classes.unselected} onClick={() => onUpdatePage(page)}>
                <Typography className={classes.navLink} variant="h6" >{page}</Typography>     
            </Button> 
        </Grid >           
    )        
}

function DesktopNav({ onUpdatePage, selectedPage }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const pages = ['Home', 'About', 'Videos', 'Photos', 'Store', 'Contact']

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        if(open === false) return
        setOpen(false);
    };
    return(
        <React.Fragment>
            <Paper className={classes.appBar}>
                <Grid container spacing={1}  justify="space-between">  
                    <Grid item md={1}>
                        <img className={classes.avatar} src={hermanUrl}/>
                    </Grid>
                    {pages.map((page) => 
                         <NavButton key={page} page={page} selectedPage={selectedPage} onUpdatePage={onUpdatePage}/>  
                    )}
                    <Grid item md={1} className={classes.navGridItem}>
                        <Button className={classes.navLinkNoBg} 
                                onClick={handleDrawerOpen}>
                                <Typography  variant="h6" >Playlist <QueueMusicIcon/></Typography>       
                        </Button>      
                    </Grid>
                </Grid>  
            </Paper>    
                    <div style={{visibility: open ? 'visible' : 'hidden', position: 'absolute', zIndex: 1, right: 0}}>
                       {/* <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div> */}
                        <div>
                            <SoundCloud/>
                        </div>
                    </div>    
            
            <Toolbar id='back-to-top-anchor'/>   
        </React.Fragment>                
    )
}

function MobileNav(){    
    const classes = useStyles();
    return(
        <AppBar position='fixed' color='primary' className={classes.mobileAppBar}>
            <Toolbar>
                <IconButton edge="start" aria-label="open drawer">
                    <MenuIcon />
                </IconButton>
                <Fab color="secondary" className={classes.fabButton} aria-label="add" >
                    <ChevronLeftIcon />
                </Fab>
                <div className={classes.grow} />
                <IconButton edge="end"  aria-label="open drawer">
                    <QueueMusicIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )       
}

export default function Nav ({ onUpdatePage, selectedPage }){  
    return(
        <MediaConsumer>         
        {({ width }) => (
        width > 500 ? <DesktopNav 
                        onUpdatePage={onUpdatePage} 
                        selectedPage={selectedPage}/>
                    : <DesktopNav 
                        onUpdatePage={onUpdatePage} 
                        selectedPage={selectedPage}/>
            )}
        </MediaConsumer>       
    )
}

