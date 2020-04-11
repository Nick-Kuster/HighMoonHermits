import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

export default class Quote extends React.Component {
    languages = [
        'How ya gonna sell that shirt off your back?',
         'Notice the look of an age old friend. Never be afraid to open dusty doors again',
         'It was the dogs!',
         `Sometimes it's hard to walk a straight line when you're half in the bag and three sheets to the wind so to speak... But to fly?`,
         `Stay away from drugs and dirty women.`,
         'Pedal faster, I hear banjos!',
         'The bass guitar spoke in tongues to me, so I asked him what he meant. This is what he meant...',
         'Is this just a stroke of bad luck?',
         'All the sweet nothings turned out to mean nothing, true to their name... I guess...',
         `Two of us we're gonna sail our ships through the storms in the middle of the sea. If the Devil send waves our way we'll make our escape.`
     ]
     sources = [
         'A song yet unwritten',
         'Notice',
         'Unkown',
         'moe.',
         'The Old Man',
         'Everyone That Hears Our Music... Probably',
         'Down in the Basement',
         'Bad Luck',
         'Blackberry Winter',
         'Escape'
    ]
    state = {
        selectedQuote: '',
        selectedQuoteSource: '',
    } 
    nextQuote(){
        const random = Math.floor(Math.random() * this.languages.length)
        const selectedQuote = this.languages[random]
        const selectedQuoteSource = this.sources[random]
        this.setState({selectedQuote: selectedQuote, selectedQuoteSource: selectedQuoteSource })
    }
    componentDidMount(){
        this.nextQuote();        
        this.interval = setInterval(() => {
            this.nextQuote(); 
          }, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    

    render () {
        const { selectedQuote, selectedQuoteSource } = this.state
        return(            
            <Grid container spacing={2} style={{marginBottom: '15px'}} justify="space-between">  
                <Grid item md={12} >
                    <Typography  variant="h5" align="center"><i>"{selectedQuote}"</i> </Typography> 
                </Grid>

                <Grid item md={12}>
                    <Typography  variant="h5" align="right"><i>--{selectedQuoteSource}</i></Typography>
                </Grid>
            </Grid>          
        )        
    }
}