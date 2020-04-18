import React from 'react';
import { Typography, AppBar, Grid, Button, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
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
        paddingTop: 10,
        height: '16vh',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    mobileButtonGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mobileButtonGridItem: {
        flexGrow: 1,
        height: '10%'
    },
    avatar: {
        width: 'auto',
        height: '50%',
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
        width: 'auto',
        height: '50%'
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
       background: theme.palette.primary.light,
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
        flexGrow: 1,
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

    },
    playlistIcon: {
        maxHeight: '75%',
        width: 'auto'
    }
}));

function NavButton({ page, selectedPage, onUpdatePage }){        
    const classes = useStyles();
    const contact = 'https://i.imgur.com/s7D59Yp.png'
    const videos = 'https://i.imgur.com/ks2cog9.png'
    const home = 'https://i.imgur.com/Fr9hFwX.png'
    const about = 'https://i.imgur.com/aEzODow.png'
    const photos = 'https://i.imgur.com/oGpaRDP.png'
    const store = 'https://i.imgur.com/we4gq0k.png'
    return(
        <Grid item md={1} className={classes.navGridItem} >     
            <Button variant='contained' color='primary' className={page === selectedPage ? classes.selected : classes.unselected} onClick={() => onUpdatePage(page)}>                    
                {
                    {
                        'Home': <img src={home}/>,
                        'About': <img src={about}/>,
                        'Videos': <img src={videos}/>,
                        'Photos': <img src={photos}/>,
                        'Store': <img src={store}/>,
                        'Contact': <img src={contact}/>
                    }[page]
                }
            </Button> 
        </Grid >           
    )        
}


function MobileNavButton({ page, selectedPage, onUpdatePage }){        
    const classes = useStyles();
    return(          
        <Button variant='contained' color='primary' className={classes.mobileMenuButton} onClick={() => onUpdatePage(page)}>
            <Grid className={classes.mobileButtonGrid}>
                {
                    
                    {
                        'Home': <HomeIcon style={{ fontSize: 40}}/>,
                        'About': <InfoIcon style={{ fontSize: 40}}/>,
                        'Videos': <VideoLibraryIcon style={{ fontSize: 40}}/>,
                        'Photos': <PhotoLibraryIcon style={{ fontSize: 40}}/>,
                        'Store': <StorefrontIcon style={{ fontSize: 40}}/>,
                        'Contact': <ContactMailIcon style={{ fontSize: 40}}/>
                    }[page]                    
                }
                {page}
            </Grid>
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
                <Grid container spacing={1}  justify="space-around">  
                    {pages.map((page) => 
                         <NavButton key={page} page={page} selectedPage={selectedPage} onUpdatePage={onUpdatePage}/>  
                    )}
                </Grid>  
            </Paper>                
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

    return (
      <React.Fragment>        
        <AppBar position='fixed' color='primary' className={classes.mobileAppBar}>
            {pages.map((page) => 
                <MobileNavButton key={page} page={page} selectedPage={selectedPage} onUpdatePage={onUpdatePage}/>  
            )}   
        <BackToTop/>
        </AppBar>
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
        width > 500 ? <DesktopNav 
                        onUpdatePage={onUpdatePage} 
                        selectedPage={selectedPage}/>
                    : <MobileNav
                        onUpdatePage={onUpdatePage} 
                        selectedPage={selectedPage}/>
            )}
        </MediaConsumer>       
    )
}

