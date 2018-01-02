import React from 'react';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleButtonClickEdit(comment) {
    this.props.OnEdit(comment);
  }
  handleButtonClickDelete(comment) {
    this.props.OnDelete(comment);
  }
  render() {
    return(
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Comment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.Comments.map((account) =>
              <tr key={account.Comment}>
                <td>{account.UserId}</td>
                <td>{account.Comment}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickDelete(comment)}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </button>
                </td>
              </tr>)
          }
        </tbody>
      </table>
    );
  }
}
