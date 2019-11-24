const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar de b hasta l', opts)
    .help()
    .argv;

module.exports = {
    argv
}