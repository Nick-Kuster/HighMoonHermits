import React from 'react'
import { getBlogs } from '../utils/api'
import { Toolbar, Typography, IconButton, AppBar, Drawer,Grid, Button, Paper, ClickAwayListener } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Markup } from 'interweave'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        padding: theme.spacing(4),
        background:  theme.palette.primary.main,
        margin: 'auto',
        opacity: .95,
        maxWidth: '100%',
        minHeight: '100%',
        alignContent: 'center',
        justifyContent: 'space-around',
        
    },
    blogsGrid: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        marginRight: '10px',
    },
    blog: {
        marginTop: '10px' 
    },
    eventsGrid: {
        flexGrow: 1,
        backgroundColor: 'blue'
    },
    card: {
        maxWidth: 750,
        marginBottom: '10px' ,
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
    
    return(
        <React.Fragment>
            {blogs.map((blog) => {
                var author = blog.Author ?? 'High Moon Hermits';
                return(                    
                     <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                {author.charAt(0)}
                                </Avatar>
                            }
                            title={blog.Title}
                            subheader={blog.Date}
                        />
                        
                        {blog.Image ? 
                            <CardMedia
                                className={classes.media}
                                image={blog.Image}
                                title={blog.Title}
                            /> :
                            <Divider/>
                        }
                        
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" >
                                <Markup content={blog.Content}/>
                            </Typography>
                        </CardContent>
                     </Card>
                )
            })}
        </React.Fragment>
       
    )
   
}

function HomeLayout({blogs}){
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid className={classes.blogsGrid}>
                {blogList({blogs})}
            </Grid>
            <Grid className={classes.eventsGrid}>
                <Typography variant='h3'>
                    What's Up Hey how are ya whats going on blah blah blah
                </Typography> 
            </Grid>
        </Paper>
    )
}

export default class Home extends React.Component {
    
    state = {    
        blogs: []
    } 

    
    componentDidMount(){
        getBlogs().then(            
            blogs => { 
                 
                const data = blogs.Items  
                console.log(data)       
                this.setState({ blogs: data })
            }
        )
    }

    render() {
        const{ blogs } = this.state
        return (
            <HomeLayout blogs={blogs}/>
        )
    }
}