import React from 'react';
export default class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleButtonClickRead(blog) {
    this.props.OnRead(blog)
  }
  handleButtonClickEdit(blog) {
    this.props.OnEdit(blog);
  }
  handleButtonClickDelete(blog) {
    this.props.OnDelete(blog);
  }
  handleButtonClickReBlog(blog) {
    this.props.OnReBlog(blog);
  }
  render() {
    return(
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Title</th>
            <th>User Id</th>
            <th>Reblogged by</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.Blogs.map((blog, index) =>
              <tr key={index}>
                <td>{blog.BlogName}</td>
                <td>{blog.UserId}</td>
                <td>{blog.Reblogger}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickRead(blog)}>
                    <span className="glyphicon glyphicon-eye-open" aria-hidden="true">Read</span>
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickEdit(blog)}>
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true">Edit</span>
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickDelete(blog)}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true">Delete</span>
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickReBlog(blog)}>
                    <span className="glyphicon glyphicon-copy" aria-hidden="true">Re-blog</span>
                  </button>
                </td>
              </tr>)
          }
        </tbody>
      </table>
    );
  }
}
