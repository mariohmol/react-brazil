import React, { Component } from 'react'

import {
  BrazilMaskComponent,
  BrazilValidateComponent
} from 'react-brazil'

import { DATA, DATAERROR } from './utils';

const FORMATS = ['cpf', 'cnpj', 'cep', 'rg', 'telefone', 'placa', 'renavam', 'titulo', 'time', 'currency', 'pispasep']

const css = {
  page:  { maxWidth: 860, margin: '0 auto', padding: '24px 16px', fontFamily: 'sans-serif' },
  table: { width: '100%', borderCollapse: 'collapse', marginBottom: 32 },
  th:    { textAlign: 'left', padding: '8px 12px', background: '#f6f8fa', borderBottom: '2px solid #ddd', fontWeight: 600 },
  td:    { padding: '8px 12px', borderBottom: '1px solid #eee', verticalAlign: 'middle' },
  badge: (ok, empty) => ({
    display: 'inline-block',
    padding: '2px 10px',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 13,
    background: empty ? '#f6f8fa' : ok ? '#dafbe1' : '#ffe3e3',
    color:      empty ? '#888'    : ok ? '#1a7f37' : '#cf222e',
    minWidth: 80,
    textAlign: 'center',
  }),
  mono: { fontFamily: 'monospace', fontSize: 13 },
}

const inputStyle = {
  padding: '6px 10px',
  fontFamily: 'monospace',
  border: '1px solid #ccc',
  borderRadius: 4,
  width: 200,
  fontSize: 14,
}

class ValidatedRow extends Component {
  constructor(props) {
    super(props)
    this.state = { value: DATA[props.format] || '' }
  }

  render() {
    const { format } = this.props
    const { value } = this.state
    // treat as empty when only mask placeholders remain (underscores)
    const empty = !value || value.replace(/[_]/g, '').replace(/[^a-zA-Z0-9]/g, '').trim() === ''

    return (
      <tr>
        <td style={css.td}><code>{format}</code></td>
        <td style={css.td}>
          <BrazilMaskComponent
            defaultValue={DATA[format] || ''}
            format={format}
            style={inputStyle}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </td>
        <td style={css.td}>
          {empty ? (
            <span style={css.badge(false, true)}>—</span>
          ) : (
            <BrazilValidateComponent format={format} value={value}>
              {isValid => (
                <span style={css.badge(isValid, false)}>
                  {isValid ? '✓ valid' : '✗ invalid'}
                </span>
              )}
            </BrazilValidateComponent>
          )}
        </td>
      </tr>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div style={css.page}>
        <h1>React Brazil</h1>

        {/* ── MASK + LIVE VALIDATE ── */}
        <h2>Mask &amp; Validate</h2>
        <p style={{ color: '#555', marginBottom: 16 }}>
          Inputs use <code>BrazilMaskComponent</code> pre-filled with example values.
          Edit any field to see <code>BrazilValidateComponent</code> update in real time.
        </p>
        <table style={css.table}>
          <thead>
            <tr>
              <th style={css.th}>Format</th>
              <th style={css.th}>Masked input</th>
              <th style={css.th}>Valid?</th>
            </tr>
          </thead>
          <tbody>
            {FORMATS.map(f => <ValidatedRow key={f} format={f} />)}
          </tbody>
        </table>

        {/* ── STATIC VALID/INVALID ── */}
        <h2>Static examples</h2>
        <p style={{ color: '#555', marginBottom: 16 }}>
          Known-valid vs known-invalid values passed directly to <code>BrazilValidateComponent</code>.
        </p>
        <table style={css.table}>
          <thead>
            <tr>
              <th style={css.th}>Format</th>
              <th style={css.th}>Valid value</th>
              <th style={css.th}></th>
              <th style={css.th}>Invalid value</th>
              <th style={css.th}></th>
            </tr>
          </thead>
          <tbody>
            {FORMATS.map(key => DATA[key] && DATAERROR[key] && typeof DATA[key] === 'string' ? (
              <tr key={key}>
                <td style={css.td}><code>{key}</code></td>
                <td style={{ ...css.td, ...css.mono }}>{DATA[key]}</td>
                <td style={css.td}>
                  <BrazilValidateComponent format={key} value={DATA[key]}>
                    {isValid => <span style={css.badge(isValid, false)}>{isValid ? '✓ valid' : '✗ invalid'}</span>}
                  </BrazilValidateComponent>
                </td>
                <td style={{ ...css.td, ...css.mono }}>{DATAERROR[key]}</td>
                <td style={css.td}>
                  <BrazilValidateComponent format={key} value={DATAERROR[key]}>
                    {isValid => <span style={css.badge(isValid, false)}>{isValid ? '✓ valid' : '✗ invalid'}</span>}
                  </BrazilValidateComponent>
                </td>
              </tr>
            ) : null)}
          </tbody>
        </table>
      </div>
    )
  }
}
