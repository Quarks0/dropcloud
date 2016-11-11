import React from 'react';
import {withRouter} from 'react-router';

class CommentItem extends React.Component{
  constructor(props){
    super(props);

    this.handleCommentDelete = this.handleCommentDelete.bind(this);
    this.deleteCommentButton = this.deleteCommentButton.bind(this);
  }

  handleCommentDelete(){
    this.props.deleteComment(this.props.comment.id);
  }

  deleteCommentButton(){
    if (this.props.comment.username === this.props.currentUser.username){
      return(
          <button className="comment-delete" onClick={this.handleCommentDelete}>X</button>
      );
    } else {
      return(<div></div>);
    }
  }

  render(){
    return (
      <div className="song-comment">
        <div className="#comment-text">
          <div className="comment-username"><strong>{this.props.comment.username}</strong> commented: </div>
          <div className="comment-body">{this.props.comment.body}</div>
        </div>
        {this.deleteCommentButton()}
      </div>
    );
  }
}

export default CommentItem;
