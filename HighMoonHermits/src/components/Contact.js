import React from 'react'
import PageTemplate from './PageTemplate'

const banner = 'https://i.imgur.com/tmZzV9G.png'
export default class About extends React.Component {
    render() {
        return(
            <PageTemplate banner={ banner }></PageTemplate>
        )
    }
}