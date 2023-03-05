//Clase
class Libro {
  constructor(slots) {
    this.isbn = slots.isbn,
    this.titulo = slots.titulo,
    this.autor = slots.autor,
    this.anio = slots.anio;
  }

  //2-Create a new book instance
  static agregarLibro(slots) {

    const libro = new Libro(slots);
    
    Libro.instancia[slots.isbn] = libro;

    console.log(`Libro ${slots.isbn} Creado!`);

  };

  static convertir = function (filaLibro) {

    const libro = new Libro(filaLibro);
    return libro;

  };

  //3-Retrieving / Recuperar 
  static leerTodosLosLibros() {

    let libroString = "";

    try {
      if (localStorage["libros"]) {
        libroString = localStorage["libros"];
      };
    } catch (error) {
      alert("🔴 Error, no se encontraron los datos -> " + error);
    };

    if (libroString) {
      const libro = JSON.parse(libroString);
      const keys = Object.keys(libro);
      console.log(`${keys.length} libros cargados.`);

      for (const key of keys) {
        Libro.instancia[key] = Libro.convertir(libro[key]);
      };
    };

  };

  //Update a book instance
  static actualizar(slots) {

    const libro = Libro.instancia[slots.isbn];
    const anio = parseInt(slots.anio);

    if (libro.titulo !== slots.titulo) {
      libro.titulo = slots.titulo;
    };

    if (libro.anio !== anio) {
      libro.anio = anio;
    }

    console.log(`libro ${slots.isbn} Actualizado!`);
  };

  //Delete a book instance
  static eliminar(isbn) {

    if (Libro.instancia[isbn]) {
      console.log(`Libro ${isbn} Eliminado`);
      delete Libro.instancia[isbn];
    } else {
      console.log(`El libro ${isbn} no se encuentra el la base de datos`);
    };

  };

  //Saving all book instaces
  static guardarTodo() {
    
    let libroString = "";
    const error = false;

    try {
      libroString = JSON.stringify(Libro.instancia);
      localStorage["libros"] = libroString;
    } catch (err) {
      alert(`🔴 Error en la base de datos local: ${err}`);
      error = true;
    };

    if (!error) {
      const nmrDeLibros = Object.keys(Libro.instancia).length;
      console.log(`${nmrDeLibros} Libros guardados`);
    };

  };

  //Create Test Data
  static crearDB() {

    Libro.instancia["A40"] = new Libro(
      { isbn: "A40", titulo: "Weaving the Web", año: 2000 });
    Libro.instancia["A41"] = new Libro(
      { isbn: "A41", titulo: "La Magia de Pensar en Grande", año: 1972 });
    Libro.instancia["A42"] = new Libro(
      { isbn: "A42", titulo: "El Principito", año: 1816 });

    Libro.guardarTodo();

  };
  
  //Claring all Data
  static limpiarDB() {

    if (confirm("¿Quieres limpiar toda la Base de Datos?")) {
      localStorage["libros"] = "{}";
    };

  };

};

//1-Representing all books instance (Admin)
Libro.instancia = {};








