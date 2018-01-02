import React from 'react';

export default class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserId: '',
      Comment: ''
    };
  }

  handleSubmit() {
    var newComment = {
      UserId: this.state.UserId,
      Comment: this.state.Comment
    };
    this.props.OnSubmit(newComment);
  }

  handleUserIdChange(e) {
    this.setState({
      UserId: e.target.value
    });
  }

  handleCommentChange(e) {
    this.setState({
      Comment: e.target.value
    })
  }

  isUserEntryValid(e) {
    return true;
  }
  // added onChange back in. This was needed to see what I entered into the fields.
  // Also, without the onChange, my entered values did not get stored.
  // This responsibility might belong elsewhere
// Want to preserve line breaks from textarea in show screen.
  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" placeholder="User Name" value={this.state.UserId} onChange={this.handleUserIdChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea className="form-control" id="comment" placeholder="Comment Name" value={this.state.Comment} onChange={this.handleCommentChange.bind(this)}></textarea>
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}
