import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Quote, Paragraph} from 'grommet';
class Comment extends Component{


    render(){
        //Checks if the property exists before rendering
        return(

            <Quote credit='Scott Reiter'
            emphasizeCredit={true}>
              <Paragraph>
                {this.props.comment}
                </Paragraph>
            </Quote>
        )
    }
}



export default Comment;
