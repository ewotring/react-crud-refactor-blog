import React from 'react';

export default class ModifyBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BlogName: props.Blog.BlogName,
      Body: props.Blog.Body,
      UserId: props.Blog.UserId,
      Reblogger: props.Blog.Reblogger,
      Picture: props.Blog.Picture
    }
  }

// Tutorial left this onChange event handler change out
  handleBlogNameChange(e) {
    this.setState({
      BlogName: e.target.value
    });
  }

  handleBodyChange(e) {
    this.setState({
      Body: e.target.value
    });
  }

  handleUserIdChange(e) {
    this.setState({
      UserId: e.target.value
    });
  }

  handlePictureChange(e) {
    this.setState({
      Picture: e.target.files[0]
    });
  }


  handleSubmit() {
    var blog = {
      BlogName: this.state.BlogName,
      Body: this.state.Body,
      UserId: this.state.UserId,
      Reblogger: this.state.Reblogger,
      Picture: this.state.Picture
    };
    this.props.OnSubmit(blog)
  }

  isUserEntryValid() {
    return true;
  }
// Does the Blog Name field really need to be disabled?
// Want to preserve line breaks from textarea in show screen.
  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="blogName">Title</label>
          <input type="text" className="form-control" id="blogName" value={this.state.BlogName} onChange={this.handleBlogNameChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" rows="10" id="body" value={this.state.Body} onChange={this.handleBodyChange.bind(this)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" value={this.state.UserId} disabled="true" onChange={this.handleUserIdChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload File</label>
          <input type="file" className="form-control" id="fileUpload" name="blogPic" accept="image/*" onChange={this.handlePictureChange.bind(this)} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit/Back</button>
      </form>
    );
  }
}
