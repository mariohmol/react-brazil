/**
 * @class JSGanttComponent
 */
import * as React from 'react'
// import * as jsbrasil from 'js-brasil';
import './styles.scss';

export type Props = {
  data: Array<any>,
  options: Object
}

export default class BrazilValidateComponent extends React.Component<Props> {
  
  // componentDidMount() {
  //   this.makeChart();
  // }
  // componentDidUpdate() {
  //   this.makeChart();
  // }


  render() {
    return (
      <React.Fragment>
        Validate
      </React.Fragment>
    )
  }
}

