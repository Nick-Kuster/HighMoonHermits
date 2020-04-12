import React from 'react'
import { Typography, Paper } from '@material-ui/core';
import PageTemplate from './PageTemplate'
import { MediaConsumer } from '../contexts/media';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        height: '100%',
        padding: '15px', 
        marginTop: '15px',       
        backgroundColor: theme.palette.primary.light
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        maxHeight: '700px'
    },
    mobileRowContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '20px'
    },
    image: {
        maxWidth: '50%',
        height: 'auto',
        marginBottom: '20px'
    },
    picImage: {
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '20px',
        borderRadius: 100
    },
    subtitleImage: {
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '20px'
    }
}))

function NameCard({ pic, name, instrument }){
    const classes = useStyles();
    return(
        <div className={classes.columnContainer}>        
            <img className={classes.picImage} src={pic} />   
            <img className={classes.subtitleImage} src={name} />  
            <img className={classes.subtitleImage} src={instrument} />        
        </div>
    )
}


export default function About (){   
    
    const banner = 'https://i.imgur.com/U3i3mIj.png'
    const classes = useStyles();

    const keltyPic = 'https://i.imgur.com/Oe9SbsC.png'
    const keltyName = 'https://i.imgur.com/dzt4slO.png'
    const keltyInst = 'https://i.imgur.com/vrUBr1j.png'

    const buckPic = 'https://i.imgur.com/Rd7W1qf.png'
    const buckName = 'https://i.imgur.com/9M6O8jB.png'
    const buckInst = 'https://i.imgur.com/AgjSrn6.png'

    const zachPic = 'https://i.imgur.com/IlWD8mO.png'
    const zachName = 'https://i.imgur.com/eAKrJqc.png'
    const zachInst = 'https://i.imgur.com/ZG7hVYY.png'

    const nickPic = 'https://i.imgur.com/mM9Jp5N.png'
    const nickName = 'https://i.imgur.com/VwUlezB.png'
    const nickInst = 'https://i.imgur.com/l0b5XDR.png'

    const theShortVersion = 'https://i.imgur.com/VXwD83j.png'
    const origins= 'https://i.imgur.com/ITqVvI1.png'

    return(
        <MediaConsumer>         
        {({ width }) => (
            <PageTemplate banner={ banner } width = { width }>    
                {width > 500 && 
                    <div className={classes.columnContainer}>
                        <NameCard pic={buckPic} name={buckName} instrument={buckInst}/>
                        <NameCard pic={keltyPic} name={keltyName} instrument={keltyInst}/>
                    </div>
                }   
                
                <Paper color={ '#fff' } className={classes.paper}>      
                {width < 500 && 
                    <div className={classes.mobileRowContainer}>
                         <div className={classes.columnContainer}>
                            <NameCard pic={buckPic} name={buckName} instrument={buckInst}/>
                            <NameCard pic={keltyPic} name={keltyName} instrument={keltyInst}/>
                        </div>
                        <div className={classes.columnContainer}>
                            <NameCard pic={zachPic} name={zachName} instrument={zachInst}/>
                            <NameCard pic={nickPic} name={nickName} instrument={nickInst}/>
                        </div>   
                    </div>
                }
                    <img className={classes.image} src='https://i.imgur.com/NefwGRV.jpg'/>   
                    <img src={theShortVersion}/>                    
                    <Typography align='center' variant='h5'>
                    A progressive folk-rock/jam band quartet out of Akron, OH, The High Moon Hermits pull from a broad spectrum of influences. From The Band, Dylon and the Dead, to The Avett Brothers,
                    and Greensky Bluegrass, from Flecktones to Funkadelic, there's a little bit of everybody crafted into their strange brew
                    </Typography>
                        
                    <img src={origins}/>                 
                    <Typography align='center' variant='h5'>
                        Circa 2009/2010, Buck took Nick to Summer Camp Music Festival in Illinois, where a lifelong love of bluegrass and jam music was born. This set Nick down a path 
                        that would find him purchasing a fiddle and later a banjo. In short time, the fiddle had to be returned due to being a broke college student, and the banjo ended up in Buck's 
                        hands where it found its forever home. Having never played a string instrument, Buck spent the next several years honing his craft while blending in his unique perspective as 
                        a saxophone player. During this time, Nick and Buck would go on to write quite a few songs that would be the beginnings of the High Moon Hermit song library we know today. 
                    </Typography>  
                    <Typography align='center' variant='h5'>
                        There were a few iterations of the original band--trying out different combinations of bass players and drummers--but nothing stuck for many years. A faithful night at bon fire in 
                        2015 saw Zach Vujas join the fray as the band's search for a third member came to an end. Zach brought a much-needed low-end funkiness to the band with his Primus and Phish
                        inspired bass runs and slaps. They played their first show as a string trio in August of 2016 at a benefit for a friend, and have since played a circuit of wineries,
                        breweries and taphouses. Matt Kelty joined the band in 2020 as a drummer. Following in Buck's footsteps of not having much previous experience in his instrument before joining,
                        Matt has picked up the drums masterfully. Having a lot of experience mixing and writing beats on his computer, his fine ear and taste for rythym bring a unique hip-hop element
                        to what is already an eclectic brew of influence.
                    </Typography>   
                    <Typography align='center' variant='h5'>
                        The High Moon Hermits continue to grow musically and look forward to continuing to bring joy and love to the World.
                    </Typography>                                               
                </Paper>    
                {width > 500 &&
                    <div className={classes.columnContainer}>
                        <NameCard pic={zachPic} name={zachName} instrument={zachInst}/>
                        <NameCard pic={nickPic} name={nickName} instrument={nickInst}/>
                    </div>
                    
                }
            </PageTemplate>
        )}
        </MediaConsumer>
    )
}