import React from 'react'
import PageTemplate from './PageTemplate'

const banner = 'https://i.imgur.com/U3i3mIj.png'
export default class About extends React.Component {
    render() {
        return(
            <PageTemplate banner={ banner }></PageTemplate>
        )
    }
}