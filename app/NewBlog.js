import React from 'react';

export default class NewBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BlogName: '',
      Body: '',
      UserId: '',
      Reblogger: '',
      Picture: '',
      Comments: [],
      BlogList: this.props.Blogs
    };
  }

  handleSubmit() {
    var blogNames = [];
    this.state.BlogList.forEach(function(blog) {
      blogNames.push(blog.BlogName);
    });
    console.log(blogNames);
    console.log(this.state.BlogName);
    if (!blogNames.includes(this.state.BlogName)) {
      var blog = {
        BlogName: this.state.BlogName,
        Body: this.state.Body,
        UserId: this.state.UserId,
        Reblogger: this.state.Reblogger,
        Picture: this.state.Picture,
        Comments: this.state.Comments
      };
      this.props.OnSubmit(blog);
    } else {
      alert("Title must be unique.")
    }
  }

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
    const data = URL.createObjectURL(e.target.files[0]);
    this.setState({
      Picture: data
    });
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
          <input type="text" className="form-control" id="blogName" placeholder="Blog Name" value={this.state.BlogName} onChange={this.handleBlogNameChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" rows="10" id="body" placeholder="Body" value={this.state.Body} onChange={this.handleBodyChange.bind(this)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" placeholder="User Name" value={this.state.UserId} onChange={this.handleUserIdChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload File</label>
          <input type="file" className="form-control" id="fileUpload" name="blogPic" accept="image/*" onChange={this.handlePictureChange.bind(this)} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}
