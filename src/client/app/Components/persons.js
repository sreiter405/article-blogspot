import React, {Component, PropTypes} from 'react'
import Person from './person'
class Persons extends Component {
    constructor(props){
        super(props)
        this.getPersons = this.getPersons.bind(this)
    }
    getPersons (){
        return this.props.persons.map((person)=><Person person={person} key={person.userId}/>)
    }
    render() {

        return (
         <div>
                <h2>Persons</h2>
                {this.getPersons()}
        </div>)

    }

}

Persons.PropTypes = {
    persons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Persons
