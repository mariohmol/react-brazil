import * as React from 'react'
import { validateBr } from 'js-brasil';
import './styles.scss';

export type Props = {
  value: any,
  format: string,
  state?: string,
  children?: (isValid: boolean) => React.ReactNode
}

export default class BrazilValidateComponent extends React.Component<Props> {
  render() {
    const { value, format, state, children } = this.props;
    let isValid = false;

    if (validateBr[format]) {
      if (format === 'inscricaoestadual' && state) {
        isValid = validateBr[format](value, state);
      } else {
        isValid = validateBr[format](value);
      }
    }

    if (children) {
      return <React.Fragment>{children(isValid)}</React.Fragment>;
    }
    return <span data-valid={isValid}>{value}</span>;
  }
}
