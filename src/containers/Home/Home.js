import React, { Component } from 'react';
import Helmet from 'react-helmet';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends Component {
  render() {

    return (
      <div>
        <Helmet title="Home"/>
        <RaisedButton label="Secondary" secondary={true}  />
      </div>
    );
  }
}
