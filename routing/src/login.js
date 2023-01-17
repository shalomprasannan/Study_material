import React from "react";

export default class Login extends React.Component {

  render() {
    const {username, password, isAuth} = this.props.state;
    const {submitHandler, changeHandler} = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={changeHandler}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={changeHandler}
        />
        <br />
        <button onClick={submitHandler}>Login</button>
        <p>Authentication {isAuth}</p>
      </div>
    );
  }
}

