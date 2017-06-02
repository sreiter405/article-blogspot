import React, { Component, PropTypes } from 'react'
import {ListGroup, ListGroupItem, Well} from 'react-bootstrap'
class Person extends Component{


    render(){
        var person = this.props.person
        //Checks if the property exists before rendering
        return(

                    <ListGroup>
                        <ListGroupItem>{person.userId}</ListGroupItem>
                        <ListGroupItem>{person.username}</ListGroupItem>
                        <ListGroupItem>{person.fullName}</ListGroupItem>
                        <ListGroupItem>{person.interests.join()}</ListGroupItem>
                    </ListGroup>
        )
    }
}



export default Person;
