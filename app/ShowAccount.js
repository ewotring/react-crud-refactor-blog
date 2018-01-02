import React from 'react';
import Comments from './Comments.js';

export default class ShowAccount extends React.Component {
  constructor(props) {
    super(props);
    const myRe = new RegExp(":(.*)");
    const dataUrl = myRe.exec(props.Account.Picture);
    console.log(dataUrl[1]);
    this.state = {
      AccountName: props.Account.AccountName,
      Website: props.Account.Website,
      UserId: props.Account.UserId,
      Password: props.Account.Password,
      Picture: dataUrl[1]
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
  // The blob url doesn't work in the img tag.
  // Timebox out; I've spent too much time on this task.
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
          <img src={`${this.state.Picture}`} />
        </div>
        <button type="button" className="btn btn-default" onClick={() => this.handleSubmit()}>Back</button>
        <Comments />
      </div>
    );
  }
}
