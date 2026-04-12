import BrazilFormatComponent from '../src/format'
import BrazilMaskComponent from '../src/mask'
import BrazilValidateComponent from '../src/validate'


import { shallow, mount } from 'enzyme';

import { DATA, DATARAW, DATAERROR } from './utils';
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

  const validFormats = ['cpf', 'cnpj', 'cep', 'rg', 'placa', 'titulo'];

  it('returns true for valid values', () => {
    for (const key of validFormats) {
      const wrapper = shallow(
        <BrazilValidateComponent value={DATA[key]} format={key} />
      );
      expect(wrapper.find('span').prop('data-valid')).toBe(true);
    }
  });

  it('returns false for invalid values', () => {
    const errorFormats = ['cpf', 'cnpj', 'cep', 'rg', 'placa'];
    for (const key of errorFormats) {
      const wrapper = shallow(
        <BrazilValidateComponent value={DATAERROR[key]} format={key} />
      );
      expect(wrapper.find('span').prop('data-valid')).toBe(false);
    }
  });

  it('calls children render prop with isValid boolean', () => {
    let received: boolean | undefined;
    shallow(
      <BrazilValidateComponent value={DATA['cpf']} format="cpf">
        {(isValid: boolean) => { received = isValid; return null; }}
      </BrazilValidateComponent>
    );
    expect(received).toBe(true);
  });

  it('calls children render prop with false for invalid value', () => {
    let received: boolean | undefined;
    shallow(
      <BrazilValidateComponent value={DATAERROR['cpf']} format="cpf">
        {(isValid: boolean) => { received = isValid; return null; }}
      </BrazilValidateComponent>
    );
    expect(received).toBe(false);
  });

  it('returns false for unknown format', () => {
    const wrapper = shallow(
      <BrazilValidateComponent value="anything" format="unknown" />
    );
    expect(wrapper.find('span').prop('data-valid')).toBe(false);
  });
});
