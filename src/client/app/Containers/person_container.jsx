
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Persons from '../Components/persons'
class PersonContainer extends Component
{
    render(){
        if (!this.props.isFetching) {
            return (
                <div className="well">
                    <Persons persons={this.props.persons}/>
                </div>
            )
        } else {
                return <h2>Loading</h2>
            }
        
    }
}




const mapStateToProps = (state) => {
    return {
       persons: state.persons,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, null)(PersonContainer)
