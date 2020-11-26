//requires
const fileSystem = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.rainbow);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base digitada: ${base} no es un numero`.red);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fileSystem.writeFile(`tablas de multiplicar/Tabla${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}