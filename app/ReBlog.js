import React from 'react';

export default class ReBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BlogName: "Reblog ".concat(props.Blog.BlogName),
      Body: props.Blog.Body,
      UserId: props.Blog.UserId,
      Reblogger: props.Blog.Reblogger,
      Picture: props.Blog.Picture,
      Comments: props.Blog.Comments
    };
  }

  handleSubmit() {
    var blog = {
      BlogName: this.state.BlogName,
      Body: this.state.Body,
      UserId: this.state.UserId,
      Reblogger: this.state.Reblogger,
      Picture: this.state.Picture,
      Comments: this.state.Comments
    };
    this.props.OnSubmit(blog);
  }

  handleRebloggerChange(e) {
    this.setState({
      Reblogger: e.target.value
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
          <label htmlFor="blogName">Title</label>
          <input type="text" className="form-control" id="blogName" placeholder="Blog Name" value={this.state.BlogName} disabled="true" />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" rows="10" id="body" placeholder="Body" value={this.state.Body} disabled="true"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" placeholder="User Name" value={this.state.UserId} disabled="true" />
        </div>
        <div className="form-group">
          <label htmlFor="reblogger">Reblogged by</label>
          <input type="text" className="form-control" id="reblogger" placeholder="Reblogger" value={this.state.Reblogger} onChange={this.handleRebloggerChange.bind(this)} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}
