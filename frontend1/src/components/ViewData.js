import React,{Component} from 'react'
import axios from 'axios'
import { Doughnut} from 'react-chartjs-2'
import DownloadCSV from './DownloadCSV'



export default class ViewData extends Component{
    constructor(props){
        super(props);

        this.state={
            chartData:{
                labels: ['Graph Theory', 'Machine Learning', 'Virtual Reality', 'Augmented Reality'],
                datasets:[
                {
                    label:'No. of Students',
                    data:[],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                    ]
                }
                ]
            },
            graphTheoryCount:0,
            machineLearningCount:0,
            virtualRealityCount:0,
            augmentedRealityCount:0,
            studentDetails:[['Name','Reg No.']],
            //regNo:[]
        }
    }
    componentDidMount(async ){
        axios.get('http://localhost:5000/form/')
            .then(res =>{
                if(res.data.length>0){
                    res.data.forEach(student => {
                        //console.log(student.choiceOfElective)
                        switch(student.choiceOfElective){
                            case('Graph Theory'):
                                this.setState(prevState =>{
                                  return { graphTheoryCount:prevState.graphTheoryCount+1}
                                });break;
                            case('Machine Learning'):
                                this.setState(prevState =>{
                                   return  {machineLearningCount:prevState.machineLearningCount+1}
                                });break;
                            case('Augmented Reality'):
                                this.setState(prevState =>{
                                   return {augmentedRealityCount:prevState.augmentedRealityCount+1}
                                });break;
                            case('Virtual Reality'):
                                this.setState(prevState =>{
                                  return  {virtualRealityCount:prevState.virtualRealityCount+1}
                                });break;
                            default:
                                console.log("failed to setStae",student.choiceOfElective)

                        }
                        const details =[student.studentName,student.regNo]
                        //console.log(details);
                        let stdnt ={...this.state}
                        //console.log(stdnt.studentDetails)
                        stdnt.studentDetails=[...stdnt.studentDetails,...[details]];
                        //console.log(studentDetails)
                         this.setState({
                                 studentDetails:stdnt.studentDetails
                          })
                         
                    })
                   // console.log(this.state.studentDetails) 
                    //changing data array
                    const chart={...this.state}
                    const counts=[this.state.graphTheoryCount,this.state.machineLearningCount,this.state.virtualRealityCount,this.state.augmentedRealityCount]
                    chart.chartData.datasets[0].data=[...chart.chartData.datasets[0].data,...counts]
                    //console.log(chart.chartData.datasets[0].data)
                    this.setState({
                            chartData : chart.chartData
                    })
               // console.log(this.state);
                }
            })
    }
    render(){
        return(
            <div>
                <h5> Analysis of the Response :-</h5><br />
                <Doughnut
                data={this.state.chartData}
                width={75}
                height={28}
                options={{ maintainAspectRatio: true }}
                /><br />
                <DownloadCSV details={this.state.studentDetails} />   
            </div>
        );   
    }
}