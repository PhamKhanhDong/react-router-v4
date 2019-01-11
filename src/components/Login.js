import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };

  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  }

  onLogin = (e) => {
    e.preventDefault();
    let {txtUsername, txtPassword} = this.state;
    if (txtUsername === "admin" && txtPassword === 'admin')
      localStorage.setItem('user', JSON.stringify({
        username: txtUsername,
        password: txtPassword
      }));
    
    window.location = "/products"

    // return <Redirect to="/products"/>
  }

  render() {
    let loggedInUser = localStorage.getItem('user');
    var {location} = this.props;
    if (loggedInUser !== null)
      return <Redirect to={{
        pathname: "/products",
        state: {
          from: location
        }
      }}/>
    
    
    console.log(location);

    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onLogin}>
              <legend>Login</legend>
              <div className="form-group">
                <label>Username: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="txtUsername"
                  value={this.state.txtUsername}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="txtPassword" 
                  value={this.state.txtPassword}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            
          </div>
        </div>
        
      </div>
    );
  }
}