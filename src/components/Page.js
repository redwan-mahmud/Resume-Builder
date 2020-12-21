import React from 'react';
import Name from './Name'
import Address from './Address'
import Education from './Education'
class Page extends React.Component {
    render() {
        return (
            <div>
            <div className = "ui two column stackable grid">
                <div className = "ten wide column">   
                    <h2 className = "ui left aligned header"><Name/></h2>
                </div>
                <div className = "six wide column">
                    <h3 className = "ui right aligned header"><Address/></h3>
                </div>
            </div>
            <div className = "ui divider"></div>
            <div className = "ui segment"><Education/></div>
            <div className = "ui divider"></div>
            <div className = "ui segment"><p>Work Experience</p></div>
            <div className = "ui divider"></div>
            <div className = "ui segment">Skills</div>
            </div>

        )
    }
}

export default Page 