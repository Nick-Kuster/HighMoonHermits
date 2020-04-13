import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const background = 'https://i.imgur.com/DzgIdCj.jpg';
const useStyles = makeStyles(theme => ({
    pageHeader: {
        backgroundImage: `url(${background})`,        
        padding: theme.spacing(4),     
        margin: 'auto',
        backgroundSize: 'cover'
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    subtitleHeader: {
        width: '100%',
        height: '90px',
        backgroundColor: "url(https://i.imgur.com/2fHjs4d.jpg)",
        marginBottom: '15px',
        marginTop: '10px',
        borderRadius: 15,
        display: 'flex',
        paddingTop: '30px',
        justifyContent: 'space-around'
    },
}))



export default function Header({ selectedPage, image, variant = 'pageHeader'}){
    const classes = useStyles();
    const images = {
            'About' : 'https://i.imgur.com/U3i3mIj.png',    
            'Contact' : 'https://i.imgur.com/tmZzV9G.png',    
            'Home' : 'https://i.imgur.com/BdFcxtD.png',    
            'Photos' : 'https://i.imgur.com/CZBQOc3.png',
            'Store' : 'https://i.imgur.com/AUKrLMu.png',    
            'Videos' : 'https://i.imgur.com/czDax4V.png'
    } 
    
    return(
        variant === 'pageHeader' ?
        <Paper className={classes.pageHeader}>  
            <img className={classes.image} src={images[selectedPage]}/>
        </Paper>
            :    
        <div className={classes.subtitleHeader}>
            <img src={image}/>
        </div>
    )
}