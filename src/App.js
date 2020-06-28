import React, { Component } from 'react';  
import './App.css';  
import Piechart from './Piechart';   
import Linechart from './Linechart'; 
import Barchart from './Barchart'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Person from './Person/Person';
import AuthContext from './context/auth_context';


class App  extends Component{
  static contextType=AuthContext;
  setLanguage = language => {
    this.setState({ language });
  };

  state = {
    language: "en",
    multilang:["jp"],
    playername : [],
    runscore : [],
    setLanguage: this.setLanguage
  };
  
  componentDidMount(){
   console.log("app==", this.state.multilang);
       
   }



  render(){





  return (
 
    
    <div className="App">  

<AuthContext.Provider
          value={this.state}
        >
     
     <Person/>


      <Router>  
        <div>  
          <div className="row" >  
            <div className="col-sm-12 btn btn-warning">  
              Charts in ReactJS  
          </div>  
          </div>  
          <div className="row"> >
           <div className="col-sm-1">  

            </div>  
            <div className="col-sm-2">  
              <Link to={'/Piechart'} className="nav-link btn btn-info">Piechart</Link>  
            </div>  
           
            <div className="col-sm-2">  
              <Link to={'/Linecharts'} className="nav-link btn btn-info">Line Chart</Link>  
            </div>  

            <div className="col-sm-2">  
              <Link to={'/Barchart'} className="nav-link btn btn-info">Bar Chart</Link>  
            </div>  
       
            

          </div>  

        </div>  

        <div className="container">  

          <Switch>  

            <Route exact path='/Piechart' component={Piechart} />  

            <Route path='/Linecharts' component={Linechart} />  

            <Route path='/Barchart' component={Barchart} />  

          </Switch>  

        </div>  

      </Router>  
     

</AuthContext.Provider>


    </div>  
  );
}
}
export default App;
