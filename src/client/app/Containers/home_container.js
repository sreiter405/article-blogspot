import 'grommet/scss/vanilla/index.scss';
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {App} from 'grommet'
import ArticlePage from '../Components/article.js'
import CommentPrompt from '../Components/add_comment.js'
import Comments from '../Components/comments.js'
class HomeContainer extends Component
{
    render(){
      if (this.props.isComment) {
        return (
            <div>
              <ArticlePage />
              <Comments comments={this.props.comments} />
              <CommentPrompt />
            </div>
        )
      } else {
        return (
            <div>
              <ArticlePage />
              <CommentPrompt />
            </div>
        )
      }
    }
}


const mapStateToProps = (state) => {
      return {
          comments: state.comments,
          isComment: state.isComment
      }
}


export default connect(mapStateToProps)(HomeContainer)
