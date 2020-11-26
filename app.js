const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const yargs = require('yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green} con limite`.bold))
            .catch(e => console.log(e))
        break;
    default:
        console.log('comando no reconocido');
        break;
}