import React, { PureComponent } from 'react';

export default class PureComp extends PureComponent {
  componentDidMount(){
    console.log('component child render shod!')

  }
  componentDidUpdate(){
    console.log('component child update shod!')

  }
    render() {
    return <div>
        <h4>some data changed</h4>
        <p>pure component render just when setstate return diffrent value</p>
    </div>;
  }
}
