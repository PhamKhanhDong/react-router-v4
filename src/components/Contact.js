import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';


export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
  }

  onClick = (isChecked) => {
    this.setState({isChecked: isChecked});
  }

  render() {
    return (
      <div>
        this is Contact page
        
        <button type="button" className="btn btn-info" onClick={() => this.onClick(false)}>ok</button>
        <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)}>no</button>
        <Prompt 
          when={this.state.isChecked}
          message={location => (`Ban chac chan muon di den ${location.pathname}`)}
        />
      </div>
    );
  }
}