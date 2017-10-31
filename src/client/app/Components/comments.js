import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Section} from 'grommet'
import Comment from './comment'
class Comments extends Component {
    constructor(props){
        super(props)
        this.getComments = this.getComments.bind(this)
    }
    getComments (){
      var i;
        return this.props.comments.map((comment, index)=><Comment comment={comment.commentText} key={index}/>)
    }
    render() {

        return (
         <Section align = 'center'>
              {this.getComments()}
        </Section>
      )

    }

}

Comment.PropTypes = {
    persons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Comments
