import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MediaProvider } from './contexts/media'
import Videos from './components/Videos';
import Home from './components/Home';
import Nav from './components/Nav';
import Banner  from './components/Banner';
import BackToTop from './components/BackToTop';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
      }
    }
});


// Component
//  -State
//  -Lifecycle
//  -UI
class App extends React.Component{

  state = {    
    selectedPage: 'Home',
    width: 500
  } 

  componentWillMount() {
    this.setState({ width: screen.width });
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  updatePage = (selectedPage) => {
    this.setState({ selectedPage })
    console.log(selectedPage)
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: screen.width });
  };

  render(){  
    const{ selectedPage } = this.state
      return ( //JSX
         <ThemeProvider theme={theme}>    
            <MediaProvider value={this.state}>
              <Nav  onUpdatePage={this.updatePage}
                    selectedPage ={selectedPage}
              />
              { selectedPage === 'Home' && <Home/>}              
              { selectedPage === 'Videos' && <Videos/>}  
              <Banner></Banner>           
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
