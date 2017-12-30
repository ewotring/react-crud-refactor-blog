import React from 'react';

export default class ModifyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountName: props.Account.AccountName,
      Website: props.Account.Website,
      UserId: props.Account.UserId,
      Password: props.Account.Password
    }
  }

// Tutorial left this onChange event handler change out
  handleAccountNameChange(e) {
    this.setState({
      AccountName: e.target.value
    });
  }

  handleWebsiteChange(e) {
    this.setState({
      Website: e.target.value
    });
  }

  handleUserIdChange(e) {
    this.setState({
      UserId: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      Password: e.target.value
    });
  }

  handleSubmit() {
    var account = {
      AccountName: this.state.AccountName,
      Website: this.state.Website,
      UserId: this.state.UserId,
      Password: this.state.Password
    };
    this.props.OnSubmit(account)
  }

  isUserEntryValid() {
    return true;
  }
// gonna want values with state in order to see current settings
// Does the Account Name field really need to be disabled?
  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="accountName">Account Name</label>
          <input type="text" className="form-control" id="accountName" placeholder={this.state.AccountName} disabled="true" onChange={this.handleAccountNameChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="text" className="form-control" id="website" placeholder={this.state.Website} onChange={this.handleWebsiteChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" placeholder={this.state.UserId} onChange={this.handleUserIdChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" className="form-control" id="password" placeholder={this.state.Password} onChange={this.handlePasswordChange.bind(this)} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}
