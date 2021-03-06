import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Button, Typography } from '@material-ui/core';
import { MediaConsumer } from '../contexts/media';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: '0',
    right: '0',
  },
  button: {
    height: '8vh',
    width: '100vw',
    backgroundColor: 'gray',
    borderRadius: 100,
    border: 'none',
    opacity: '.5'
},
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
function Desktop(){
  
  const classes = useStyles();

  return(
    <ScrollTop>
      <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
      </Fab>
    </ScrollTop>
  )
}

function Mobile(){
  
  const classes = useStyles();
  return(
    <ScrollTop >
        <Button className={classes.button}>
          <Typography className={classes.navLink} variant="h2" >Back To Top</Typography>               
          <KeyboardArrowUpIcon style={{ fontSize: 70}} />
        </Button>
    </ScrollTop>
  )
}

export default function BackToTop(props) { 

  return (
    <MediaConsumer>         
    {({ width, height }) => (
    width > 500 ? <Desktop/>
                : <Mobile/>
        )}
    </MediaConsumer>      
  );
}
