import React from 'react';

export default class ModifyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountName: props.Account.AccountName,
      Website: props.Account.Website,
      UserId: props.Account.UserId,
      Password: props.Account.Password,
      Picture: props.Account.Picture
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


  handlePictureChange(e) {
    this.setState({
      Picture: e.target.value
    });
  }


  handleSubmit() {
    var account = {
      AccountName: this.state.AccountName,
      Website: this.state.Website,
      UserId: this.state.UserId,
      Password: this.state.Password,
      Picture: this.state.Picture
    };
    this.props.OnSubmit(account)
  }

  isUserEntryValid() {
    return true;
  }
// Does the Account Name field really need to be disabled?
// Want to preserve line breaks from textarea in show screen.
  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="accountName">Account Name</label>
          <input type="text" className="form-control" id="accountName" value={this.state.AccountName} disabled="true" onChange={this.handleAccountNameChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <textarea className="form-control" rows="10" id="website" value={this.state.Website} onChange={this.handleWebsiteChange.bind(this)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" value={this.state.UserId} onChange={this.handleUserIdChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" className="form-control" id="password" value={this.state.Password} onChange={this.handlePasswordChange.bind(this)} />
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
