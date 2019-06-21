import React, { Component } from 'react'

import {
  BrazilFormatComponent,
  BrazilMaskComponent,
  BrazilValidateComponent
} from 'react-brazil'

import {
  estados,
  DATAERROR,
  DATARAW,
  DATA,
} from './utils';

export default class App extends Component {
  raw;
  data2;



  constructor(props) {
    super(props);
    // this.data = this.initialData();

    console.log(estados,
      DATAERROR,
      DATARAW,
      DATA);

  }

  render() {
    return (
      <div>
        <BrazilFormatComponent />
        <BrazilMaskComponent />
        <BrazilValidateComponent />
      </div>
    )
  }

}