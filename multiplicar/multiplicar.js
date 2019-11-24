//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('==========================='.green);
    console.log(`=====tabla de ${base}======`.red);
    console.log('==========================='.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${ base } * ${ index } =${ index * base }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${ base } * ${ index } =${ index * base }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log(`the file tabla del ${base} has been saved`);
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}