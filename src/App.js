import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
//import Nav from './components/Navbar';
//import NavBtn from './components/Navbar';
//import NavBtnLink from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Store from './pages/Store';
import mac from './pages/mac';
import ipad from './pages/ipad';
import iphone  from './pages/iphone';
import watch   from './pages/watch';
import airpods    from './pages/airpods';
import Tvhome   from './pages/Tvhome';
import  online   from './pages/online';
import  acccessories   from './pages/acccessories';
import support from './pages/support';
import Footer from './components/Footer.js/Footer';
import Medium from './components/video/medium2.jpg';
import Medium1 from './components/video/medium4.jpg';
import Medium2 from './components/video/medium6.jpg';
import Medium3 from './components/video/medium7.jpg';
import Medium4 from './components/video/medium8.jpg';
import Medium5 from './components/video/medium9.jpg';

function App() {
  return (

    
    <Router>
     
      <Navbar /> 
      
      <div  className="App">
      
      <img src={Medium} width="100%" height="100%" alt=""/>
      <img src={Medium1} width="100%" height="100%" alt=""/>
      
     <video loop={true} autoPlay={true} muted={true} width="100%" height="100%">
        <source src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/colors-hero/large_2x.mp4" 
          type="video/mp4"/>
      </video>
      <img src={Medium3} width="100%" height="100%" alt=""/>
      <img src={Medium4} width="100%" height="100%" alt=""/>
      <img src={Medium5} width="100%" height="100%" alt=""/>
      <img src={Medium2} width="100%" height="100%" alt=""/>

     </div>



      <Switch>    
        <Route path='/index' exact component={Home} />
        <Route path='/Store' component={Store} />
        <Route path='/support' component={support} />
        <Route path='/ipad' component={ipad} />
        <Route path='/mac' component={mac} />
        <Route path='/iphone' component={iphone} />
        <Route path='/watch' component={watch} />
        <Route path='/airpods' component={airpods} />
        <Route path='/Tvhome' component={Tvhome} />
        <Route path='/online' component={online} />
        <Route path='/acccessories' component={acccessories} />
      </Switch>
      
      <Footer/>
    </Router>

  );
}
<Footer/>

export default App;
