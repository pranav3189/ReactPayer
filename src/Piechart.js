import React, { Component } from 'react'  
import axios from 'axios';  
import { Pie } from 'react-chartjs-2';  

export class Piechart extends Component {  
    
            constructor(props) {  
    
                    super(props);  
    
                    this.state = { Data: {} };  

            }  

            componentDidMount() {  
    
                    axios.get(`http://localhost:8080/Api/Charts/Getrecord`)  
    
                            .then(res => {  
    
                                    console.log(res);  
    
                                    const ipl = res.data;  
    
                                    let playername = [];  
    
                                    let runscore = [];  
    
                                    ipl.map(record => {  

                                            playername.push(record.playerName);  
    
                                            runscore.push(record.score);  
    
                                    });  
    
                                    this.setState({  
    
                                            Data: {  
    
                                                    labels: playername,  
    
                                                    datasets: [  
    
                                                            {  
    
                                                                    label: ' 2018/2019 Top Scorer',  
    
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
    
                            })  
    
            }  
    
            render() {  
    
                    return (  
    
                            <div>  
    
                                    <Pie  
    
                                            data={this.state.Data}  
    
                                            options={{ maintainAspectRatio: false }} />  
    
                            </div>  
    
                    )  
    
            }  
    
    }  
    
      
    
    export default Piechart 