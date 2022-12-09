const fs = require('fs');

let archTareas = {
    arch:'tareas.json',
    leerArch: function(){
        let tareas =fs.readFileSync('./dataB/tareas.json',{encoding: 'utf-8'});
        return JSON.parse(tareas);
    }
};

module.exports=archTareas;
