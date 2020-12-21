import React from 'react';
import AddressForm from './AddressForm'
class Address extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            addressEdit: false,
            phone : "Your contact number",
            email : "Enter your email",

        }

        this.editAddress = this.editAddress.bind(this)

    }

    // editName = (name) =>{
    //     console.log("Name edit icon was clicked")
    //     this.setState({ nameEdit: !this.state.nameEdit })
    //     this.setState({name})
        
    // }
    editAddress = (phone,email)=>{
        console.log("Button edit Address was clicked")
        this.setState({addressEdit: !this.state.addressEdit})
        this.setState({phone,email})
    }
    render(){
    return (
        <div>
            {this.state.addressEdit?(
                <AddressForm onUpdate={this.editAddress}/>
            ): (
                <div>
                <h2>Contact Info</h2>
                <p>Contact# {this.state.phone}</p>
                <p>Email - {this.state.email}</p>
                <i className= " small edit icon" onClick ={this.editAddress}></i>   
                </div>
            )}
            
        </div>
    )
    }
}

export default Address 