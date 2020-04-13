import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MediaProvider } from './contexts/media'
import Videos from './components/Videos';
import Home from './components/Home';
import About from './components/About';
import Photos from './components/Photos';
import Store from './components/Store';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Banner  from './components/Banner';
import BackToTop from './components/BackToTop';
import SocialMedia from './components/SocialMedia';

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#a98274',
          main: '#795548',
          dark: '#4b2c20',
          contrastText: '#fff',
        },
        secondary: {
          light: '#787469',
          main: '#4c493e',
          dark: '#242218',
          contrastText: '#fff',
        },
    },
    typography: {
      h2: {
        fontWeight: 500,        
      },
      h1: {
        fontWeight: 500
      },
      h5: {
        padding: '30px'
      }
    }
});

// Component
//  -State
//  -Lifecycle
//  -UI
class App extends React.Component{

  state = {    
    selectedPage: 'About',
    width: 500
  } 

  componentDidMount() {
    this.setState({ width: screen.width });
    window.addEventListener('resize', this.handleWindowSizeChange, {passive: true});
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange, {passive: true});
  }
  
  updatePage = (selectedPage) => {
    this.setState({ selectedPage })
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: screen.width, height: screen.height });
  };

  render(){  
    const{ selectedPage } = this.state
      return ( //JSX
         <ThemeProvider theme={theme}>  
            <div id='back-to-top-anchor'/>  
            <MediaProvider value={this.state}>
              <Nav  onUpdatePage={this.updatePage}
                    selectedPage ={selectedPage}
              />
              { selectedPage === 'Home' && <Home/>}
              { selectedPage === 'About' && <About/>}                  
              { selectedPage === 'Videos' && <Videos/>}  
              { selectedPage === 'Photos' && <Photos/>}    
              { selectedPage === 'Store' && <Store/>}    
              { selectedPage === 'Contact' && <Contact/>}    
              <Banner/>   
              <SocialMedia/>
              {this.state.width < 500 && <div style={{paddingBottom: '18vh'}}/>}
              <BackToTop/>   
            </MediaProvider>               
         </ThemeProvider>   
      ) 
  }
}

ReactDOM.render(
    //React Element,
    <App/>,
    // Where to render the Element to
    document.getElementById("app")
)
