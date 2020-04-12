import React from 'react'
import PageTemplate from './PageTemplate'
const banner = 'https://i.imgur.com/AUKrLMu.png'
export default class About extends React.Component {


    render() {
        return(
            <PageTemplate banner={ banner }>                  
               <iframe 
                width="100%"
                height="1200px"
                src="https://www.dizzyjam.com/embed/highmoonhermits/"/>
            </PageTemplate>
        )
    }
}