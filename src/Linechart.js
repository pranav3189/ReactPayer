import React, { Component } from 'react'  
import axios from 'axios';  
import { Line } from 'react-chartjs-2';  
import AuthContext from './context/auth_context';
export class Linechart extends Component {  
    constructor(props) {  
                        super(props);  
                        this.state = { Data: {} };  
                }  

                static contextType=AuthContext;
                componentDidMount() {  
                       
                                console.log("linechart==", this.context.multilang);
                                    
                               
                        let playername =  this.context.playername; 
                    
                        let runscore = this.context.runscore;

                      
                        this.setState({  
                    
                                Data: {  

                                        labels: playername,  

                                        datasets: [  

                                                {  

                                                        label: '2018/2019 Top Scorer',  

                                                        data: runscore,  

                                                        backgroundColor: [  

                                                                "#3cb371",  

                                                                "#0000FF",  

                                                                "#9966FF",  

                                                                "#4C4CFF",  

                                                                "#00FFFF",  

                                                                "#f990a7",  

                                                                "#aad2ed",  

                                                                "#FF00FF",  

                                                                "Blue",  

                                                                "Red"  

                                                        ]  

                                                }  

                                        ]  

                                }  

                        });  








                                   
                    
                            }  



render() {  
    
                    return (  
    
                            <div>  
    
                                    <Line  
    
                                            data={this.state.Data}  
    
                                            options={{ maintainAspectRatio: false }} />  
    
                            </div>  
    
                    )  
    
            }  
    
    }  
    
    
      
    
    export default Linechart  