import React from 'react'
import PageTemplate from './PageTemplate'

export default class About extends React.Component {
    render() {
        return(
            <PageTemplate>                              
               <iframe 
                width="100%"
                height="1200px"
                src="https://www.dizzyjam.com/embed/highmoonhermits/"/>
            </PageTemplate>
        )
    }
}