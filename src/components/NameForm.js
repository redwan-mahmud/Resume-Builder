import React from 'react'

class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeName = this.changeName.bind(this)
    }
    
    changeName(e){
        if(!this.state.input.trim()){
            this.props.done()
            e.preventDefault()
            return
        }
        this.props.onUpdate(this.state.input)
        
    }


    handleChange(e){
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        
        return (
            <form onSubmit={this.changeName}>
                <input
                    type="text"
                    placeholder=" Name"
                    id="input"
                    value={this.state.input}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button type = "submit">Submit</button>
            </form>

        )
    }
}

export default NameForm