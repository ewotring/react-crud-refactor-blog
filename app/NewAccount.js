import React from 'react';

export default class NewAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      AccountName: '',
      Website: '',
      UserId: '',
      Password: ''
    };
  }

  handleSubmit() {
    var account = {
      AccountName: this.state.AccountName,
      Website: this.state.Website,
      UserId: this.state.UserId,
      Password: this.state.Password
    };
    this.props.OnSubmit(account);
  }

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
    })
  }

  isUserEntryValid(e) {
    return true;
  }
  // added onChange back in. This was needed to see what I entered into the fields.
  // Also, without the onChange, my entered values did not get stored.
  // This responsibility might belong elsewhere, but this
  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="accountName">Account Name</label>
          <input type="text" className="form-control" id="accountName" placeholder="Account Name" value={this.state.AccountName} onChange={this.handleAccountNameChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="text" className="form-control" id="website" placeholder="Website" value={this.state.Website} onChange={this.handleWebsiteChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" placeholder="User Name" value={this.state.UserId} onChange={this.handleUserIdChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" className="form-control" id="password" placeholder="Password Name" value={this.state.Password} onChange={this.handlePasswordChange.bind(this)} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}
