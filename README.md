## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install municipiosve
```

```js
var Info = require('municipiosve'); //or *  let { Municipio , Estados, Cantidad} = require(''municipiosve);
```

### Info.Municipio('Carabobo')

La Funcion recibe como parametro el estado a consultar y este devuelve en tiempo constante un array con todos los municipios del Estado consultado.

#### Info.Estados()

Esta Funcion devuelve un array de los estados de Venezuela

#### Info.Cantidad('Carabobo')

Esta Funcion Recibe como Parametro un Estado y devuelve una informacion corta de la cantidad de municipios que consta el estado consultado.

####(Nota) Se puede obtener la cantidad Numerica llamando  a la funcion Municipio('Estado a Consultar').length
####(Nota) Ambas Funciones solo Reciben como parametro cadenas de Texto en caso contrario le mostrara un mensaje de error por la consola.

```js
var Info = require('municipiove')

module.export = {
    Test1 : (req, res)=>{
      try {
              //Funcion Municipio("Carabobo") recibe una cadena devuelve un array = ['San Joaquin','','Guacara',...etc]
              let { Municipio } = Info;
              res.status(200).json(Municipio('Carabobo'))
      } catch (error) {
        console.error(error);
      }
    },
    Test2: (req, res)=>{
      try {
              //Funcion Cantidad("Carabobo") recibe una cadena y devuelve un texto ='El Estado ${X} consta de ${n municipios}'
              let { Cantidad } = Info;
              res.send((Cantidad('Carabobo')));
      } catch (error) {
        console.error(error);
      }
    },
    Test3 : (req, res)=>{
      try {
              //Funcion Municipio("Carabobo").length  devuelve un entero de la cantidad de municipios
              let { Municipio } = Info;
              res.status(200).json(Municipio('Carabobo').length)
      } catch (error) {
        console.error(error);
      }
    }
};

```

## License

[MIT](LICENSE)
