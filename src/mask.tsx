/**
 * @class JSGanttComponent
 */
import * as React from 'react'
// import * as jsbrasil from 'js-brasil';
import './styles.scss';
import MaskedInput from 'react-text-mask'
import { MASKS } from 'js-brasil/src/mask';

export type Props = {
  value: any,
  format: string
}

export default class BrazilMaskComponent extends React.Component<Props> {

  render() {
    const mask = MASKS[this.props.format] && MASKS[this.props.format].textMask ? MASKS[this.props.format].textMask : [];
    
    return (
      <React.Fragment>
        { mask ? (<MaskedInput
          mask={mask}
          {...this.props}
        />) : ''}
      </React.Fragment>
    )
  }
}

