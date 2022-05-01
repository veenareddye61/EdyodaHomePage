import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Course from './components/Course/course';

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
         <Route path="/" exact component={Home} />

         <Route path="/Course/:slug"  component={Course} />
         
         <Route component={()=> <div style={{width:"100%",height:"75vh",textAlign:"center"}}>
            <h1 style={{position:"absolute",top:"250px",left:"450px",color:"skyblue",fontSize:"55px"}}>
            404 Page Not Found

            </h1>
            <p>Go Back Home click On Edyoda Logo</p>
            </div> } />

      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
   );
}
 
export default App;