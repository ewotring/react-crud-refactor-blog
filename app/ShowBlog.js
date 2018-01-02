import React from 'react';
import Comments from './Comments.js';
import NewComment from './NewComment.js';

export default class ShowBlog extends React.Component {
  constructor(props) {
    super(props);
    const myRe = new RegExp(":(.*)");
    const dataUrl = myRe.exec(props.Blog.Picture);
    console.log(dataUrl[1]);
    this.state = {
      BlogName: props.Blog.BlogName,
      Body: props.Blog.Body,
      UserId: props.Blog.UserId,
      Reblogger: props.Blog.Reblogger,
      Picture: dataUrl[1],
      Comments: props.Blog.Comments
    }
  }

// Shouldn't it be a handleClick?
  handleSubmit() {
    const post = {
      BlogName: this.state.BlogName,
      Body: this.state.Body,
      UserId: this.state.UserId,
      Reblogger: this.state.Reblogger,
      Picture: this.state.Picture,
      Comments: this.state.Comments
    }
    this.props.OnSubmit(post)
  }

  addNewComment(newComment) {
    const comments = this.state.Comments;
    comments.push(newComment);
    this.setState({
      Comments: comments
    })
  }

  removeComment(commentToRemove) {
    const result = confirm("Please confirm comment removal");
    if (result == false)
      return;
    const comments = this.state.Comments;
    const newComments = comments.filter(function(commentRemoval) {
      return commentRemoval.comment != commentToRemove.comment
    });
    this.setState({
      Comments: newComments
    });
  }

  isUserEntryValid() {
    return true;
  }
  // Having trouble getting image to display.
  // The blob url doesn't work in the img tag.
  // Timebox out; I've spent too much time on this task.
  render() {
    return(
      <div>
        <div>
          <h4>Title</h4>
          <p>{this.state.BlogName}</p>
        </div>
        <div>
          <h4>Body</h4>
          <p>{this.state.Body}</p>
        </div>
        <div>
          <h4>User Id</h4>
          <p>{this.state.UserId}</p>
        </div>
        <div>
          <h4>Reblogged by</h4>
          <p>{this.state.Reblogger}</p>
        </div>
        <div>
          <h4>Picture</h4>
          <img src={`${this.state.Picture}`} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Back/Save Comments</button>
        <NewComment OnSubmit={this.addNewComment.bind(this)} />
        <Comments Comments={this.state.Comments} OnDelete={this.removeComment.bind(this)} />
      </div>
    );
  }
}
