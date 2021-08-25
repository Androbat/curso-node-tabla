const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        
    

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${base * i}\n`;
            consola += `${ base } ${ 'x'.blue } ${ i } ${ '='.blue } ${ base * i }\n`;

        }

        if (listar){
            console.log('=============='.blue);
            console.log('Tabla del', base);
            console.log('=============='.blue);
            console.log(salida);

        }
        // Si no especificas es path, entonces tomara el local por defecto
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        

    return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
};