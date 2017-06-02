import React, {Component, PropTypes} from 'react'
import Contact from './contact'
class Contacts extends Component {
    constructor(props){
        super(props)
        this.getContacts = this.getContacts.bind(this)
    }
    getContacts (){
        return this.props.contacts.map((person)=><Contact contact={contact} key={contact.contactId}/>)
    }
    render() {

        return (
         <div>
                <h2>Contacts</h2>
                {this.getContacts()}
        </div>
      )

    }

}

Contacts.PropTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Contacts
