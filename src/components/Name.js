import React from 'react';
import NameForm from './NameForm'
const iconStyle ={
    float: 'right'
}
class Name extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nameEdit: false,
            name : "Your Name"
        }

        this.editName = this.editName.bind(this)

    }

    editName = (name) =>{
        console.log("Name edit icon was clicked")
        this.setState({ nameEdit: !this.state.nameEdit })
        this.setState({name})
        
    }
    render(){
    return (
        <div className = "ui clearing segment">
            {this.state.nameEdit ? (
                            <NameForm onUpdate={this.editName} />
                        ) : (
                            <div>
                                <h2>{this.state.name}</h2>
                                <i className="small edit icon" onClick ={this.editName}></i>
                            </div>
                        )}
        </div>
    )
    }
}

export default Name 