import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip, Paper } from '@material-ui/core';
import Quote from './Quote'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const shadowHermit = 'https://lh3.googleusercontent.com/vg5VNlb4IXgsSh1h1iFmVsazzMKkqAMTgQm_ndfpwEAGNdiUKyQyKAvfmqv9ZTQtbPmPxghHkU2F7AJ8ji0kuMV-0kj7dKJi-0i0O_T2vU2fpqIydmfmXppS06k0JS9rYvQjhvr7TvXJJXXtc4uS7gWC_LBYfqSA2-05sPdWmdjPzw0OlM4x-FR0SUPz9i6Al1ZwSDu5adj35ncS3-DY_MG8SM-Bht6q00yy4rLzVS46S4JuIrVTK0dhw6Nt36MIV_uxXF3MNhyb9ZetFmW_pke9kJ80Y5oWAGsiKqvfke_pKLNnLJPYDTckEJfFqFy7E9lPf81T0N0hO2lv-RVky7vHHao_AhASptI1dpsBXVcj2f79Jf2LM93WOY9tUggGAghtXkC3RcTWvqLZMU3b2KUFULXgui7gc2KoOgK9Y-SINLa4DiQvQYSmuIPc4bFeKCAVU348fJdBT5az8uGbXH2oBo0dEHvEfv0zK7fXYEHV0uvKBogu_PmHkXJiJQcddt6prm1AcXSrSU0whAnmYDHLCVlnsShECmkCRjYxrHZ1ZV4LDoukm4t0SqNQhe0fESewhiGi1QEZexct0o0nM7k8-5Qus-PfNXte7hF5suKqEx2n6odArb7zSaLMJey_IJmAAroIDd4cFuAKEvP7YLzlIz9F7Hdz4ZNPBDMUseVAErK99qizf3UU6U8Y=s853-no';
const useStyles = makeStyles(theme => ({
    banner: { 
        display: 'flex',
        justifyContent: 'space-around',
        opacity:.98,
        alignItems: 'center',
        height: '15%',
        padding: '12px',
        borderRadius: '3px',
        background:  '#ddd',
    },
    imageContainer:{
        flex: 1,
        height: '100%',
        width: '100%',
        objectFit: 'contain'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    quote: {
        flex: 1,
        marginTop: '20px'
    },
    socialMedia: {            
        display: 'flex',    
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-End'
    },
}));
  
export default function Banner({children}) {
    const classes = useStyles();
    return(
        <Paper className={classes.banner}>    
        <div className={classes.quote}>
            <Quote />
        </div>
        <div className={classes.imageContainer}>
            <img  className={classes.image} src={shadowHermit}/>   
        </div>
        <div className={classes.socialMedia}>
            <IconButton>
                <Tooltip title="Facebook"> 
                    <FacebookIcon  alt='FacebookIcon'/>
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="YouTube"> 
                    <YouTubeIcon  alt='YouTubeIcon'/>
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Instagram"> 
                    <InstagramIcon alt='InstagramIcon'/>
                </Tooltip>
            </IconButton>
            <IconButton>
                <Tooltip title="Twitter"> 
                    <TwitterIcon alt='TwitterIcon'/>
                </Tooltip>
            </IconButton>
        </div>   
        </Paper>
    )
}