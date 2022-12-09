//Micro desafio 1
let fs = require('fs');
/*let tareasJSON = fs.readFileSync('./tareas.json',{encoding: "utf-8"});
let tareas = JSON.parse(tareasJSON); */
const arch = require('./funcionesDeTareas');
let tareas = arch.leerArch();

//Micro desafio 2.1
let process = require('process');

let accion = process.argv[2];

switch (accion){
    case 'listar':
        console.log('\nListado de tareas\n---------------------------------------------------\n');
        if (tareas ===0){
            console.log('La lista de tareas esta vacia.');
            console.log('---------------------------------------------------');
        }else{
            for(let i= 0; i < tareas.length; i++){
                console.log(`${i+1} - titulo: ${tareas[i].titulo}\n     Estado: ${tareas[i].estado}`);
                console.log('---------------------------------------------------');
            };
        };
        break;

    case undefined:
        console.log('Atención!!! - Tienes que pasar una acción.')
        console.log('Las acciones disponibles son: listar.\n--------------------------------------')
        break;
    default:
        console.log('--------------------------------------')
        console.log('No entiendo que quieres hacer.');
        console.log('Las acciones disponibles son: listar.\n--------------------------------------')
        
};



