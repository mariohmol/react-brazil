/**
 * @class JSGanttComponent
 */
import './styles.scss';
import BrazilFormatComponent  from './format';
import BrazilMaskComponent  from './mask';
import BrazilValidateComponent  from './validate';

export type Props = {
  data: Array<any>,
  options: Object
}

export {
  BrazilFormatComponent, BrazilMaskComponent, BrazilValidateComponent
}

