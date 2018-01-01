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

// Can this handleSubmit be pared down?
// Shouldn't it be a handleClick?
  handleSubmit() {
    this.props.OnSubmit()
  }

  isUserEntryValid() {
    return true;
  }
// gonna want values with state in order to see current settings
// Does the Account Name field really need to be disabled?
  render() {
    return(
      <div>
        <div>
          <h4>Account Name</h4>
          <p>{this.state.AccountName}</p>
        </div>
        <div>
          <h4>Website</h4>
          <p>{this.state.Website}</p>
        </div>
        <div>
          <h4>User Id</h4>
          <p>{this.state.UserId}</p>
        </div>
        <div>
          <h4>Password</h4>
          <p>{this.state.Password}</p>
        </div>
        <div>
          <h4>Picture</h4>
          <p>{this.state.Picture}</p>
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Back</button>
      </div>
    );
  }
}
