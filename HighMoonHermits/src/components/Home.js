import React from 'react';
import { getBlogs, getEvents } from '../utils/api';
import {  Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Markup } from 'interweave'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Header from './Header';
import PageTemplate from './PageTemplate';
import FacebookIcon from '@material-ui/icons/Facebook';

const happenings = 'https://i.imgur.com/GZURAsq.png';
const eventsHeader = 'https://i.imgur.com/RLVaAr7.png';

const useStyles = makeStyles(theme => ({
    imageFit: {
        width: '150px',
        height: '150px',
        maxWidth: '100%',
    },    
    blogsGrid: {
        width: '45%'
    },
    mobileBlogsGrid: {
        width: '100%',
        marginBotton: '40px'
    },
    blog: {
        marginTop: '10px' 
    },
    spacer: {
        width: 10
    },
    eventsGrid: {
        width: '45%'
    },
    mobileEventsGrid: {
        width: '100%'
    },
    event: {
        width: '100%',
        height: '120px',
        backgroundColor: '#ddd',   
        marginBottom: 8,
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'space-around'
    },
    eventDetails: {
        width: '50%',
        marginTop: '15px'
    },
    innerEventDetails: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    eventSpacer: {
        width: '25%'
    },
    eventDate: {
        width: '25%',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    eventPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingBottom: '20px'
    },
    eventImage: {
        width: 'auto',
        height: '100%',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    innerEvent: {
        display: 'flex',
        flexDirection: 'column'
    },
    card: {
        marginBottom: '10px' ,
        backgroundColor: '#ddd'
    },
    avatar: {
        backgroundColor: theme.palette.primary.dark,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}))

function blogList({blogs}){    
    const classes = useStyles();    
    blogs.sort((a, b) => b.Id - a.Id)
    return(
        <React.Fragment>
            {blogs.map((blog) => {
                var author = blog.Author ?? 'High Moon Hermits';
                return(                    
                     <Card key={blog.Title} className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                {author.charAt(0)}
                                </Avatar>
                            }
                            title={blog.Title}
                            subheader={blog.Date}
                        />
                        <CardContent>
                                <Markup  matchers={[new UrlMatcher('url')]}
                                content={blog.Content}/>
                        </CardContent>
                        {blog.Image != `''` &&
                            <CardMedia
                                className={classes.media}
                                image={blog.Image}
                                title={blog.Title}
                            />                          
                        }
                        {blog.Video != `''` && 
                            <CardMedia
                            component='iframe'
                            height='375'
                            image={blog.Video}
                            />
                        }
                        {!(blog.Image && blog.Video) && <Divider/>}
                        
                    </Card>
                )
            })}
        </React.Fragment>       
    )   
}

function eventList({ events }){    
    const classes = useStyles();
    events.sort((a, b) => a.Id - b.Id)
    return (
        <React.Fragment>
            <div>
            {events.map((event) => {

                return(
                    <div key={event.Id} className={classes.event}> 
                        <div className={classes.eventSpacer}>
                        <a href={event['Venue Link']} target='blank'><img className={classes.eventImage} alt='hello' src={event['Event Image']}/></a></div>
                        <div className={classes.eventDetails}>
                            <Typography variant='h3'>{event.Venue}</Typography> 
                            <div className={classes.innerEventDetails}>
                                
                                {event['Event Link'] != `''` ?
                                <div className={classes.eventPage}>
                                    <span><i>Event Page:</i></span>
                                    <a href={event['Event Link']} target='blank'>
                                        <FacebookIcon/>
                                    </a>
                                </div>
                                 : <span><i>No Event <br/> Page Yet</i></span>} 
                                <Typography variant='h6'> {event.Location} </Typography> 
                            </div>                            
                        </div>
                        <div className={classes.eventDate}>                            
                            <Typography variant='h6'>{event.Date}</Typography> 
                            <Typography variant='h6'>Starts: {event.StartTime}</Typography> 
                            <Typography variant='h6'>Ends: {event.EndTime}</Typography>                               
                        </div>
                    </div>
                )
            })}  
            </div>
                    
        </React.Fragment>
    )
}

function HomeLayout({blogs, events, width }){
    const classes = useStyles();
    const mobile = width < 500;
    return (        
            <PageTemplate width={width}>
                    {mobile &&
                        <div className={classes.mobileEventsGrid}>                    
                            <Header image={eventsHeader} variant='subHeader'/>
                            <div className={classes.innerEvent}>                                
                                {eventList({events})} 
                            </div>
                        </div>     
                    }
                    <div  className={mobile ? classes.mobileBlogsGrid : classes.blogsGrid}>
                        <Header image={happenings} variant='subHeader'/>
                        {blogList({blogs})}
                    </div>
                    {!mobile &&
                        <div  className={classes.eventsGrid}>                    
                            <Header image={eventsHeader} variant='subHeader'/>
                            <div className={classes.innerEvent}>                                
                                {eventList({events})} 
                            </div>
                        </div>     
                    }    
            </PageTemplate>
    )
}

export default class Home extends React.Component {    
    state = {    
        blogs: [],
        events: [],
        width: 500
    } 
    
    componentDidMount(){        
        this.setState({ width: screen.width });
        getBlogs().then(            
            blogs => {                  
                const data = blogs.Items    
                this.setState({ blogs: data })
            }
        );
        getEvents().then(
            events => {
                const data = events.Items 
                this.setState({ events: data })
            }
        )
    }
    
    render() {
        const{ blogs, events, width } = this.state
        return (
            <HomeLayout blogs={blogs} events={events} width={width} /> 
        )
    }
}