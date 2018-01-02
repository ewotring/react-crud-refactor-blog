import React from 'react';

export default class ReBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      AccountName: props.Account.AccountName,
      Website: props.Account.Website,
      UserId: props.Account.UserId,
      Password: props.Account.Password,
      Picture: props.Account.Picture,
      Comments: props.Account.Comments
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
  // This responsibility might belong elsewhere
// Want to preserve line breaks from textarea in show screen.
  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="accountName">Title</label>
          <input type="text" className="form-control" id="accountName" placeholder="Account Name" value={this.state.AccountName} disabled="true" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Body</label>
          <textarea className="form-control" rows="10" id="website" placeholder="Website" value={this.state.Website} disabled="true"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="userid">User Id</label>
          <input type="text" className="form-control" id="userid" placeholder="User Name" value={this.state.UserId} disabled="true" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Reblogged by</label>
          <input type="text" className="form-control" id="password" placeholder="Reblogger" value={this.state.Password} onChange={this.handlePasswordChange.bind(this)} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}
