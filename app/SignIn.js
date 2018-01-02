import React from 'react';

export default class SignIn extends React.Component {
  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in </h2>
        <label htmlFor="inputEmail" className="sr-only"> Email Address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-prinary btn-block" type="button">Sign In</button>
      </form>
    )
  }
}
