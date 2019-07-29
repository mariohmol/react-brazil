import BrazilFormatComponent from '../src/format'
import BrazilMaskComponent from '../src/mask'
import BrazilValidateComponent from '../src/validate'


import { shallow, mount } from 'enzyme';

import { DATA, DATARAW } from './utils';
import React from 'react';

describe('BrazilFormatComponent', () => {
  it('is truthy', () => {
    expect(BrazilFormatComponent).toBeTruthy()
  });

  it('test all formats ', () => {
    for (const key in DATARAW) {
      if (key === 'telefone' || key == 'inscricaoestadual'
        || key == 'currencyNumber') {
        //TODO: telefone and mobile
        continue;
      }
      const wrapper = shallow(
        <BrazilFormatComponent value={DATARAW[key]} format={key} />
      );
      expect(wrapper.text().indexOf(DATA[key])).toBeGreaterThan(-1);
    }
  });
});

describe('BrazilMaskComponent', () => {
  it('is truthy', () => {
    expect(BrazilMaskComponent).toBeTruthy()
  });
  it('test all formats ', () => {
    for (const key in DATARAW) {
      if (key === 'telefone' || key == 'inscricaoestadual'
        || key == 'currencyNumber') {
        //TODO: telefone and mobile
        continue;
      }
      const wrapper = mount(
        <BrazilMaskComponent value={DATA[key]} format={key} />
      );
      expect(wrapper.find('input').props().defaultValue).toEqual(DATA[key]);
    }
  });
}); 


describe('BrazilValidateComponent', () => {
  it('is truthy', () => {
    expect(BrazilValidateComponent).toBeTruthy()
  });
});
