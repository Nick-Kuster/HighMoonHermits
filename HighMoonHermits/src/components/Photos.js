import React from 'react'
import PageTemplate from './PageTemplate'
import { ImageList } from '../utils/ImgurImageList'
import { GridList,GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
    
    gridList: {
      width: '100%',
      height: 'auto',
    },
    image: {
        width: 'auto',
        height: '500px'
    },
    gridTile: {
        border: 'solid',
        borderColor:  theme.palette.primary.light,
        borderWidth: '10px'
    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function SimpleDialog({ open, onClose, image, children }) {
    const classes = useStyles();
   
    return (
        <Dialog 
            PaperProps={{style: {backgroundColor: 'transparent', boxShadow: 'none'}}}
             open={open} className={classes.dialog}  fullscreen
            TransitionComponent={Transition}   onClose={onClose}> 
            <img className={classes.image} src={image}/>
            {children}
        </Dialog>
    );
  }
function ImageGrid({photos} ) {
    const [open, setOpen ] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState('');
    const classes = useStyles()
    const clickForFullSize = 'https://i.imgur.com/gC1Gnju.png'

    const handleClickOpen = (image) => {
        console.log('bill' + image)
        setSelectedImage(image);
        setOpen(true);
    };
    
    const handleClose = (value) => {
        setOpen(false);
    };

    return(
        <React.Fragment>
            <Header image={clickForFullSize} variant='subHeader'/>
            <GridList cellHeight={400} className={classes.gridList} cols={6}>
                {photos.map((photo) => (
                    <GridListTile className={classes.gridTile} onClick={() => handleClickOpen(photo)} key={photo} cols={2}>
                        <img  classsName={classes.image} src={photo}/>
                    </GridListTile>
                ))}
            </GridList>    
            <SimpleDialog open={open} image={selectedImage} onClose={handleClose}/>
        </React.Fragment>
            
    )
}
export default class Photos extends React.Component {
    state = {    
        photos: []
    } 
    componentDidMount(){    
        var photos = ImageList();    
        this.setState({ photos: photos });
    }   

    render() {
        const{ photos } = this.state
        return(
            <PageTemplate>    
                <ImageGrid photos={photos}/>                     
            </PageTemplate>
        )
    }
}