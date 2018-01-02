import React from 'react';

export default class NewAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      AccountName: '',
      Website: '',
      UserId: '',
      Password: '',
      Picture: '',
      Comments: []
    };
  }

  handleSubmit() {
    var account = {
      AccountName: this.state.AccountName,
      Website: this.state.Website,
      UserId: this.state.UserId,
      Password: this.state.Password,
      Picture: this.state.Picture,
      Comments: this.state.Comments
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
          <label htmlFor="accountName">Title</label>
          <input type="text" className="form-control" id="accountName" placeholder="Account Name" value={this.state.AccountName} onChange={this.handleAccountNameChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Body</label>
          <textarea className="form-control" id="website" placeholder="Website" value={this.state.Website} onChange={this.handleWebsiteChange.bind(this)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" placeholder="User Name" value={this.state.UserId} onChange={this.handleUserIdChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" className="form-control" id="password" placeholder="Password Name" value={this.state.Password} onChange={this.handlePasswordChange.bind(this)} />
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
