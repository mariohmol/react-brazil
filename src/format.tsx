/**
 * @class JSGanttComponent
 */
import * as React from 'react'
import { maskBr } from 'js-brasil';
import './styles.scss';

export type Props = {
  value: any,
  format: string
}

export default class BrazilFormatComponent extends React.Component<Props> {

  render() {
    const value = maskBr[this.props.format] ? maskBr[this.props.format](this.props.value) : ''; 

    return (
      <React.Fragment>
        {value}
      </React.Fragment>
    )
  }
}

