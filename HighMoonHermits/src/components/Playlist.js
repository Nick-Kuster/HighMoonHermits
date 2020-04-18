import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import BandCamp  from './MusicPlayer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: theme.palette.primary.dark
    },

}))


export default function Playlist({ props }){
    const classes = useStyles();    
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    const handleClickAway = () => {
        setOpen(false);
    };
  
    return(
        <React.Fragment>            
            <ClickAwayListener onClickAway={handleClickAway}>
                <div >
                    <div className={classes.root}>
                        <Button onClick={handleDrawerOpen}>
                            <img className={classes.playlistIcon} src='https://i.imgur.com/5fM2KIP.png'/>
                        </Button>
                    </div>
                    <div 
                        onClick={handleClickAway}
                        style={{visibility: open ? 'visible' : 'hidden',
                        alignItems: 'center', 
                        display: 'flex', 
                        justifyContent: 'center',
                        position: 'absolute',
                        height: '100%',
                        width:'100%',
                        zIndex: 1}}>
                        <BandCamp onClickAway={handleClickAway}/>
                    </div>
                </div> 
            </ClickAwayListener>
        </React.Fragment>
    )

}