/**
 * @class JSGanttComponent
 */
import * as React from 'react'
// import * as jsbrasil from 'js-brasil';
import './styles.scss';
import MaskedInput from 'react-text-mask'
import { utilsBr } from 'js-brasil';

export type Props = {
  value: any,
  format: string
}

export default class BrazilMaskComponent extends React.Component<Props> {

  render() {
    const MASKS = utilsBr.MASKS;
    let mask: any = [];
    if (this.props.format && MASKS[this.props.format] && MASKS[this.props.format].textMask) {
      mask = MASKS[this.props.format].textMask;
    }
    let compRender: any = '';
    if (mask) {
      compRender = (<MaskedInput
        mask={mask}
        {...this.props}
      />);

    }
    return (
      <React.Fragment>
        {compRender}
      </React.Fragment>
    )
  }
}
