const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

const argv = require('./config/yargs').argv;

const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'list':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;

}
//let base = 'xc';
// console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log(argv);


//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
//multiplicar.crearArchivo
//crearArchivo(base)
//  .then(archivo => console.log(`archivo creado ${archivo}`))
//.catch(e => console.log(e));
//console.log(multiplicar);
//2 * 1 = 2
//2 * 2 = 4
//2 * 3 = 6