import React from 'react'


class Skills extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            skill: '',
            skills: [],
            activeForm: false,
            activeButton: true
        }
    }

    render(){
        return(
            <div>
                Skills
            </div>
        )
    }
}

export default Skills