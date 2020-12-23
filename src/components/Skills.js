import React from 'react'
import uniqid from 'uniqid'

class Skills extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            skill: '',
            skills: [],
            activeForm: false,
        }
        this.editSkills = this.editSkills.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    editSkills = () => {
        this.setState({activeForm:!this.state.activeForm})
        console.log("Button edit skill was clicked")
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            skills: [...this.state.skills, this.state.skill],
            skill: "",
        })
        //this.props.onUpdate(this.state.skills,this.state.skill)
    }



    render(){

        return(
            <div>
                <h2>Skills</h2>
                
                <div>
                    <p className="ui grey label">Grey</p>
                </div>
                {this.state.activeForm?(
                    <form onSubmit ={this.handleSubmit}>
                    <label>Enter your skills: </label>
                    <input 
                        type="text"
                        id = "skill"
                        placeholder = "add skill"
                        value = {this.state.skill}
                        onChange = {this.handleChange}
                    />
                    <div>
                        <button className = "ui primary button" type = "submit">Submit</button>
                        <button className= " ui button" onClick ={this.editSkills}>Discard</button> 
                        
                    </div>
                </form>
                
                ): (
                    <div>
                
                
                    <p>Enter skills here</p>
                    <i className= " small edit icon" onClick ={this.editSkills}></i>   
                </div>
                )}                
            </div>
        )
    }
}

export default Skills