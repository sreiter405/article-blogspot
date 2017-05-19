import React, { Component, PropTypes } from 'react'

class Person extends Component{


    render(){
        var person = this.props.person
        //Checks if the property exists before rendering
        return(
      
                <div className="well">
                    <ul>
                        <li>{person.userId}</li>
                        <li>{person.username}</li>
                        <li>{person.fullName}</li>
                        <li>{person.interests.join()}</li>
                    </ul>
                </div>
        )
    }
}



export default Person;
