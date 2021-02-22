const MUNICIPIOS = require('./data/Municipios.json');
const ESTADOS = require('./data/Estados.json');

module.exports = {
    Municipio : (Estado)=>{
        try {
            if(typeof Estado === 'string'){
                if(MUNICIPIOS[Estado]){                    
                    return MUNICIPIOS[Estado];
                }else{
                    return '*** Solo Valido para Estados Venezolanos ***'
                }
            } else{
                return '**** Especifique un String con el valor del Estado a Consultar ****';
            }
        } catch (error) {
            console.error(error);
        }
    },
    Cantidad : (Estado)=>{
        try {
            if(typeof Estado === 'string'){
                if(MUNICIPIOS[Estado]){
                    return `El Estado ${Estado} consta de ${MUNICIPIOS[Estado].length} Municipios`;
                } else {
                    return '*** Solo Valido para Estados Venezolanos ***'
                }
            }else{
                return '**** Especifique un String con el valor del Estado a Consultar ****';
            }
        } catch (error) {
            console.error(error);   
        }
    },
    Estados : () =>{
        try {
            return ESTADOS['Estados'];
        } catch (error) {
            console.error(error);
        }
    }
}