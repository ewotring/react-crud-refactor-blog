import React from 'react';

export default class ModifyAccount extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.Account);
    this.state = {
      AccountName: props.Account.AccountName,
      Website: props.Account.Website,
      UserId: props.Account.UserId,
      Password: props.Account.Password,
      Picture: props.Account.Picture
    }
  }

// Shouldn't it be a handleClick?
  handleSubmit() {
    this.props.OnSubmit()
  }

  isUserEntryValid() {
    return true;
  }
  // Having trouble getting image to display.
  // Looks like it's not passing through the app correctly
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
