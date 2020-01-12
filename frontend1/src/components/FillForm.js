import React,{Component} from 'react'
import axios from 'axios'

const Radios = (props) => {
    let e= {target:{name:"choiceOfElective",value:props.name}}
    return(
        <div className="form-check" >
            <input className="form-check-input" 
            type="radio" 
            name="choiceOfElective" 
            id="choiceOfElective" 
            value={props.name}
            onChange={()=>props.handleChange(e)} 
            />
            <label className="form-check-label" htmlFor="choiceOfElective">{props.name}</label>
        </div>
    );
};
export default class FillForm extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:"",
            regNo:0,
            choiceOfElective:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this); 
    }
    handleChange=async(e)=>{
        await this.setState({
            [e.target.name]:e.target.value
        });
    }
        
    handleSubmit=async(e)=>{
        e.preventDefault();
        //console.log(e.target.value.length);
        if(this.state.regNo.length!==9){
            alert('register no. should be 9 digits');
            console.log(e.target);
            return
        }
        const details={
            studentName:this.state.studentName,
            regNo:this.state.regNo,
            choiceOfElective:this.state.choiceOfElective
        }
        //console.log(details)
        await axios.post('http://localhost:5000/form/add',details)
            .then(res=> {console.log(res.data); window.location="/view"})
            .catch(err=>{
                setTimeout(()=>{window.location.reload(true)},1000)
                alert('duplicate register no.')
            });
        this.setState({
            studentName :"",
            regNo:0,
            choiceOfElective:""
        })
        
    }
    render(){
        return(
            <div>
                <form>
                    <h5>Fill your decisions below :-</h5><br />
                    <div className="form-group ">
                        <label htmlFor="studentName">Name</label>
                        <input type="text" 
                        className="form-control" 
                        name="studentName" 
                        id="studentName" 
                        placeholder="Enter Name" 
                        onChange={this.handleChange}
                        required/>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="regNo">Registration no.</label>
                        <input type="Number" 
                        className="form-control" 
                        name="regNo" 
                        id="regNo" 
                        placeholder="Enter Registration no."
                        onChange={this.handleChange}
                        required/>
                    </div>
                   
                    <div className="form-group ">
                        <label>Choose an elective :-</label>
                        <div className="container">
                            <Radios name="Graph Theory" handleChange={this.handleChange} />
                            <Radios name="Machine Learning" handleChange={this.handleChange} />
                            <Radios name="Virtual Reality" handleChange={this.handleChange} />
                            <Radios name="Augmented Reality" handleChange={this.handleChange} />
                        </div>
                        
                    </div>

                        <button className="btn btn-primary " onClick={this.handleSubmit}>Submit</button>  
                    
                </form>
            </div>
        );
    }

}