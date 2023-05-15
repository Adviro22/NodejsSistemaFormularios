const mysql = require('mysql');

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión exitosa a la base de datos MySQL');
});

// función para agregar un tag a la base de datos
function agregarTag() {
  let nuevoTag = generarTag();

  connection.query('INSERT INTO tags (tag) VALUES (?)', [nuevoTag], (error, results, fields) => {
    if (error) throw error;
    console.log("Nuevo tag generado y almacenado en la base de datos:", nuevoTag);
    console.log("Tags almacenados en la base de datos:");
    console.log(results);
  });
}

// función para eliminar los tags expirados de la base de datos
function eliminarTagsExpirados() {
  let hoy = new Date();

  connection.query('SELECT * FROM tags', (error, results, fields) => {
    if (error) throw error;

    for (let i = 0; i < results.length; i++) {
      let fechaCreacion = new Date(results[i].tag.substr(4,2) + "/" + results[i].tag.substr(6,2) + "/" + results[i].tag.substr(0,4));
      let diff = Math.abs(hoy - fechaCreacion);
      let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

      if (diffDays > 365) {
        connection.query('DELETE FROM tags WHERE tag = ?', [results[i].tag], (error, results, fields) => {
          if (error) throw error;
          console.log("Tag expirado eliminado de la base de datos:", results);
        });
      }
    }
  });
}

// función para obtener los tags almacenados en la base de datos y actualizar la lista en el HTML
function obtenerTagsYActualizarLista() {
  connection.query('SELECT * FROM tags', (error, results, fields) => {
    if (error) throw error;

    tags = [];

    for (let i = 0; i < results.length; i++) {
      tags.push(results[i].tag);
    }

    actualizarListaTAG();
  });
}


  