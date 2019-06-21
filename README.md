# react-brazil

> React Brazil contains formatting, validators and mask for brazillian like apps 


See the [LIVE DEMO](https://glitch.com/~boiled-continent) !

Modules:

* CPF 
* CNPJ
* RG
* Inscrição Estadual
* Telefone e Celular
* CEP
* Currency (Dinheiro)
* Time (horas e minutos)
* Number (numero e ponto decimal)
* Placa de Carro
* Renavam
* Título de Eleitor
* Proceso Jurídico

## Install

```bash
npm install --save react-brazil
```

## Usage

```tsx
import * as React from 'react'
import {BrazilFormatComponent , BrazilMaskComponent} from 'react-brazil'

class Example extends React.Component {

  constructor(props){
    super(props);
    this.value = '12345678900'; 
    this.format = 'cpf';
  }
      
  render () {
    return (
      <div>
        <BrazilFormatComponent value={this.value} format={this.format}/> 
        <BrazilMaskComponent value={this.value} format={this.format}/>

        <BrazilFormatComponent value="12345678900" format="cpf"/> 
        <BrazilMaskComponent value="12345678900" format="cpf"/>
      </div>
    )
  }
}
```

# Demo

Demo component files are included in Git Project.

Demo Project:
[https://github.com/mariohmol/react-brazil/blob/master/example/)

Used as reference the pipes/validators from:

* https://github.com/mariohmol/js-brasil
* https://github.com/text-mask/text-mask/tree/master/react#readme



## Developer Guide

Fork this project and following the instructions below:

```sh
npm install
cd example
npm install

```
to run the demo:

* `npm start` in the root folder
*  `npm start` in the `example` folder
the site will be at: localhost:3000


## Todo

Create the validate component

`<BrazilValidateComponent />`

## License

MIT © [mariohmol](https://github.com/mariohmol)
