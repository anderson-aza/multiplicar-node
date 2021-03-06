const opciones = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crear un archivo de texto con la tabla de multiplicar correcta', opciones)
    .help()
    .argv;

module.exports = {
    argv
}