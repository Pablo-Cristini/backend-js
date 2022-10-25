class Usuario {
    'nombre' = ""
    'apellido' = ""
    'mascotas' = []
    'libros' = []
    constructor(nombre, apellido, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
    }
    getFullName = () => {
        console.log(`El usuario es: ${this.nombre} ${this.apellido}`);
    }
    addMascota = () => {
        let nuevaMascota = Usuario.mascotas.push();
    }
    countMascota = () => {
        let cantidadDeMascotas = Usuario.mascotas.lentgh()
        console.log(cantidadDeMascotas);
    }
    addBook = (nombre, autor) => {
        let libro = new Libro (nombre, autor)
        this.libros.add(Libro)
        console.log(`el usuario le gusta ${libro.nombre} de ${libro.autor}`)
    }
    getBookNames = (libros) => {
        let arrayLibros = array.from(Usuario.libros)
        console.log(arrayLibros)
    }
}

class Libro {
    constructor(nombre, autor){
        this.nombre = nombre;
        this.autor = autor;
    }
}

let pablo = new Usuario("pablo", "cristini", [], []);
pablo.getFullName()
pablo.addBook("Harry Potter", "fedklen")









