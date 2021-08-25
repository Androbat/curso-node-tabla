const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true, // Forza a especificar un valor para la tabla 
                        describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'

                }).option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Especifica hasta donde llega la tabla'

            })
                .check((argv, options) => {
                        if (isNaN(argv.base)) {
                            throw 'La base tiene que ser un numero';
                        }

                        return true;
                })
                .argv; // extrae una funcion especifica al hacer el yargs.argv




// como es un objeto lo importo normal
module.exports = argv;