const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// const base = 5;

// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base = '5' ] = arg3.split('=');

// process.argv accede a los argumentos que se pueden ejecutar en la consola (terminal)


crearArchivo(argv.base, argv.listar, argv.hasta)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
        .catch(err => console.log(err));  


// option('l') -> listar
// tipo -> boolean optional
// default false