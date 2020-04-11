import React from 'react';
import { Typography, AppBar, Grid, Button, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SoundCloud from './SoundCloud';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import MenuIcon from '@material-ui/icons/Menu';
import { MediaConsumer } from '../contexts/media';
import BackToTop from './BackToTop';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ContactMailIcon from '@material-ui/icons/ContactMail';


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
        height: '8%',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    avatar: {
        width: '100%',
        height: '100%',
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
    },
    mobileAppBarSpacer:{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    mobileMenuButtonDiv: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    mobileMenuButton: {
        height: '90%',
        background: 'none',
        border: 'none'
    },
    menuIcon: {
        width: '50%',
        height: '50%',
    },
    mobileMenu: {
        position: 'fixed',
        left: '50%',
        bottom: '50%'
    },
    mobilePaper: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    dialog: {
        background: 'none'
    },
    closeMenuIcon: {
        position: 'absolute',
        left: '50%'

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


function MobileNavButton({ page, selectedPage, onUpdatePage }){        
    const classes = useStyles();
    return(  
            <Button variant='contained' color='primary' className={classes.mobileMenuButton} onClick={() => onUpdatePage(page)}>
                <Typography className={classes.navLink} variant="h6" >    
                {
                    {
                        'Home': <HomeIcon/>,
                        'About': <InfoIcon/>,
                        'Videos': <VideoLibraryIcon/>,
                        'Photos': <PhotoLibraryIcon/>,
                        'Store': <StorefrontIcon/>,
                        'Contact': <ContactMailIcon/>
                    }[page]
                }
                </Typography> 
            </Button>      
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
                <div>
                    <SoundCloud/>
                </div>
            </div>                 
        </React.Fragment>                
    )
}

function MobileNavV2({ onUpdatePage, selectedPage }) {
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
                         <MobileNavButton key={page} page={page} selectedPage={selectedPage} onUpdatePage={onUpdatePage}/>  
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
                <div>
                    <SoundCloud/>
                </div>
            </div>                 
        </React.Fragment>                
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog({ open, onClose, children }) {
    const classes = useStyles();
   
    return (
        <Dialog 
            PaperProps={{style: {backgroundColor: 'transparent', boxShadow: 'none'}}}
            fullScreen open={open} className={classes.dialog}  
            TransitionComponent={Transition}> 
            {children}
            <Button variant='contained' color='primary' onClick={onClose}>
                <Typography  className={classes.navLink} variant="h6" >X</Typography>
            </Button> 
        </Dialog>
    );
  }

function MobileNav({ onUpdatePage, selectedPage }){    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const pages = ['Home', 'About', 'Videos', 'Photos', 'Store', 'Contact'];
    var dialogContent;

    const onUpdatePageClose = (selectedPage) => {
        onUpdatePage(selectedPage)
        setOpen(false);
    };

    const handleClickOpen = ( dialog ) => {
        dialogContent = dialog;
        setOpen(true)
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };    
//     <div className={classes.mobileAppBarSpacer}>
//     <PlaylistDialog/>
//  </div>
//  <div className={classes.mobileMenuButtonDiv}>
//      <Button  className={classes.mobileMenuButton} onClick={handleClickOpen}>
//              <MenuIcon className={classes.menuIcon} />
//      </Button> 
//  </div> 
    return (
      <React.Fragment>        
        <AppBar position='fixed' color='primary' className={classes.mobileAppBar}>
            {pages.map((page) => 
                <MobileNavButton key={page} page={page} selectedPage={selectedPage} onUpdatePage={onUpdatePage}/>  
            )}   
        <BackToTop/>
        </AppBar>
        <SimpleDialog open={open} onUpdatePage={onUpdatePage} selectedPage={selectedPage} onClose={handleClose} >
               {
                dialogContent === 'nav' ? <SoundCloud/> :
                <React.Fragment>
                    {pages.map((page) => 
                    <MobileNavButton key={page} page={page} selectedPage={selectedPage} onUpdatePage={onUpdatePageClose}/>  
                    )}      
                </React.Fragment>                     
               }
        </SimpleDialog>
      </React.Fragment>
    );     
}

function PlaylistDialog(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = ( dialog ) => {
        setOpen(true)
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };  

    return (
        <React.Fragment>
            <Button  className={classes.mobileMenuButton} onClick={handleClickOpen}>
                        <QueueMusicIcon className={classes.menuIcon} />
            </Button>
            <SimpleDialog open={open}  onClose={handleClose} >
               <SoundCloud/>
            </SimpleDialog>
        </React.Fragment> 
    )
}

export default function Nav ({ onUpdatePage, selectedPage }){  
    return(
        <MediaConsumer>         
        {({ width, height }) => (
        width > 500 ? <MobileNav 
                        onUpdatePage={onUpdatePage} 
                        selectedPage={selectedPage}/>
                    : <MobileNav
                        onUpdatePage={onUpdatePage} 
                        selectedPage={selectedPage}/>
            )}
        </MediaConsumer>       
    )
}

