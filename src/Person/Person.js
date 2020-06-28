import React, { Component } from 'react';
import PersonTotal from '../personTotal/personTotal';
import AuthContext from '../context/auth_context';

class Person extends Component {
    
    
   static contextType=AuthContext;

  
   componentDidMount(){
   console.log("lang=="+this.context.language);
       
   }
    
    render() {
      console.log('[Person.js] rendering...');
      return (
        
          <div>
         




          <PersonTotal></PersonTotal>
        
          </div>

          
         
        
      );
    }
  }
  
  export default Person;