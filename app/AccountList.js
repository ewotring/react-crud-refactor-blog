import React from 'react';
export default class AccountList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleButtonClickRead(account) {
    this.props.OnRead(account)
  }
  handleButtonClickEdit(account) {
    this.props.OnEdit(account);
  }
  handleButtonClickDelete(account) {
    this.props.OnDelete(account);
  }
  handleButtonClickReBlog(account) {
    this.props.OnReBlog(account);
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
            this.props.Accounts.map((account, index) =>
              <tr key={index}>
                <td>{account.AccountName}</td>
                <td>{account.UserId}</td>
                <td>{account.Password}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickRead(account)}>
                    <span className="glyphicon glyphicon-eye-open" aria-hidden="true">Read</span>
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickEdit(account)}>
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true">Edit</span>
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickDelete(account)}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true">Delete</span>
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn btn-primary" onClick={() => this.handleButtonClickReBlog(account)}>
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
