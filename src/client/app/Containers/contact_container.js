
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ProgressBar, Jumbotron} from 'react-bootstrap'
import Contacts from '../Components/contacts'
class ContactContainer extends Component
{
    render(){
        if (!this.props.isFetching) {
            return (
                <Jumbotron>
                    <Contacts contacts={this.props.contacts}/>
                </Jumbotron>
            )
        } else {
                return <ProgressBar active label="Loading" now = {50}/>
            }

    }
}




const mapStateToProps = (state) => {
    return {
       contacts: state.contacts,
       isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, null)(ContactContainer)
