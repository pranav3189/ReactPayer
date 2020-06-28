import React, { Component } from 'react';
import AuthContext from '../context/auth_context';
class PersonTotal extends Component {

   static contextType=AuthContext;




   componentDidMount(){
    this.context.language="jp";
    this.context.multilang.push("hin");
    this.context.multilang.push("urdu");
    
 
    

    this.context.playername.push('Pranav');  
    this.context.playername.push('Ankit');  
    this.context.playername.push('Pranjal');  

    this.context.runscore.push('900');  
    this.context.runscore.push('875');  
    this.context.runscore.push('850'); 




    console.log(this.context);   
   }




    render() {
      console.log('[Person.js] rendering...');
      return (
        
          <p>
            I'm a Person Total.</p>
         
        
      );
    }
  }
  
  export default PersonTotal;