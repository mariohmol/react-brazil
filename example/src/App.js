import React, { Component } from 'react'

import {
  BrazilFormatComponent,
  BrazilMaskComponent,
  BrazilValidateComponent
} from 'react-brazil'

import {
  // estados,
  // DATAERROR,
  // DATARAW,
  DATA,
} from './utils';

export default class App extends Component {


  render() {
    return (
      <div className="container">
        <h1>React Brazil</h1>

        <h2>Format</h2>
        {Object.keys(DATA).map(key=>(<div>
          <h3>{key}: </h3>
          <BrazilFormatComponent value={DATA[key]} format={key}/>
          </div>))}
        
          <h2>Mask</h2>
          {Object.keys(DATA).map(key=>(<div>
          <h3>{key}: </h3>
         { typeof DATA[key] === 'string' ? 
         <BrazilMaskComponent value={DATA[key]} format={key}/> : ''} 
          </div>))}

          <h2>Validate</h2>
          {Object.keys(DATA).map(key=>(<div>
          <h3>{key}: </h3>
          <BrazilValidateComponent value={DATA[key]} format={key}/>
          </div>))}
      </div>
    )
  }

}