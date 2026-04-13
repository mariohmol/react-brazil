import BrazilFormatComponent from '../src/format'
import BrazilMaskComponent from '../src/mask'
import BrazilValidateComponent from '../src/validate'
import { validateBr, maskBr } from 'js-brasil'

import { DATA, DATARAW, DATAERROR } from './utils';

describe('BrazilFormatComponent', () => {
  it('is truthy', () => {
    expect(BrazilFormatComponent).toBeTruthy()
  });

  it('formats all data values correctly', () => {
    const formats = ['cpf', 'cnpj', 'cep', 'placa', 'titulo', 'time', 'currency'];
    for (const key of formats) {
      const raw = (DATARAW as any)[key];
      const expected = (DATA as any)[key];
      if (raw && expected && (maskBr as any)[key]) {
        expect((maskBr as any)[key](raw)).toEqual(expected);
      }
    }
  });
});

describe('BrazilMaskComponent', () => {
  it('is truthy', () => {
    expect(BrazilMaskComponent).toBeTruthy()
  });
});

describe('BrazilValidateComponent', () => {
  it('is truthy', () => {
    expect(BrazilValidateComponent).toBeTruthy()
  });

  const validFormats = ['cpf', 'cnpj', 'cep', 'rg', 'placa', 'titulo'];

  it('returns true for valid values', () => {
    for (const key of validFormats) {
      expect((validateBr as any)[key]((DATA as any)[key])).toBe(true);
    }
  });

  it('returns false for invalid values', () => {
    const errorFormats = ['cpf', 'cnpj', 'cep', 'rg', 'placa'];
    for (const key of errorFormats) {
      expect((validateBr as any)[key]((DATAERROR as any)[key])).toBe(false);
    }
  });
});
