import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <>
        <form>
          <label for="email">Email:</label>
          <input type="text" name="email" id="email"></input>
          
          <label for="password">Password:</label>
          <input type="text" name="password" id="password"></input>

            <input type="submit" value="submit"></input>
          </form>
        </>
      </div>
    )
  }
}

export default Login

