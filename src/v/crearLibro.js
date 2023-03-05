//
publicLibrary.v.crearLibro = {

  setupUI: function () {

    const btnGuardarLibro = document.forms["formLibro"].commit;

    Libro.leerTodosLosLibros();
    
    btnGuardarLibro.addEventListener("click",
    publicLibrary.v.crearLibro.ejecutarBtnGuardar);
    
    // Libro.agregarLibro();

    // Guarda el libro cuiando se cierra o recarga la página
    window.addEventListener("beforeunload", function () {
      Libro.guardarTodo();
    });

  },

  ejecutarBtnGuardar: () => {

    const elemLibro = document.forms["formLibro"];
    // const nuevoLibro = new Libro(slot)
    
    const slot = {
      isbn: elemLibro.isbn.value,
      titulo: elemLibro.titulo.value,
      autor: elemLibro.autor.value,
      anio: elemLibro.anio,
    }

    Libro.agregarLibro(slot)

    console.log(`🟢Conectado`);
    console.log(elemLibro);
    console.log(slot);

  }


};
