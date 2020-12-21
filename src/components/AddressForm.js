import React from 'react'

class AddressForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputNum: '',
            inputEmail: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
    }
    
    changeAddress(e){
        e.preventDefault()
        this.props.onUpdate(this.state.inputNum,this.state.inputEmail)
        
    }


    handleChange(e){
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        
        return (
            <form onSubmit={this.changeAddress}>
                <label>Phone:</label>
                <br />
                <input
                    type="text"
                    placeholder=" Contact #"
                    id="inputNum"
                    value={this.state.inputNum}
                    onChange={this.handleChange}
                ></input>
                <br />
                <label>Email:</label>
                <br />
                <input
                    type="text"
                    placeholder=" Email"
                    id="inputEmail"
                    value={this.state.inputEmail}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button type = "submit">Submit</button>
            </form>

        )
    }
}

export default AddressForm