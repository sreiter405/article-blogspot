import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addComment } from '../ActionTypes/blog_actions.js'
import Tag from 'grommet/components/icons/base/Tag';
import 'grommet/scss/vanilla/index.scss';
import {App, Form, FormField, Button, Footer, TextInput} from 'grommet'
const commentInitialState = {
    user:'',
    commentText:'',
    likes:0,
    dislikes:0
}

class CommentPrompt extends Component {

    constructor(props){
        super(props)
        this.state = {
          comment: commentInitialState
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(text){
        this.state = {
            ...this.state,
            comment: {
              ...this.state.comment,
              commentText: text
            }
        }
    }
    onSubmit() {
        this.props.postComment(this.state.comment);
    }
    render() {
        return (
            <App>
              <Form onSubmit={(e) => {
                e.preventDefault();
                this.onSubmit();
                }
              } >
                <FormField>
                    <TextInput onDOMChange={(e)=>{
                        this.onChange(e.target.value)
                    }}
                    placeHolder="Comment Here!"
                     />
                </FormField>
                <Footer>
                  <Button icon={<Tag />}
                    label='Post Comment'
                    accent={true}
                    type='submit'/>
                </Footer>
              </Form>
            </App>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (comment) => {
            dispatch(addComment(comment))
        }
    }
}


export default connect(null, mapDispatchToProps) (CommentPrompt)
