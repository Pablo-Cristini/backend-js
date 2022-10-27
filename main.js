class Usuario {
    'nombre' = ""
    'apellido' = ""
    'libros' = []
    'mascotas' = []
    constructor(nombre, apellido, mascotas, Libro){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas; 
        this.libros = Libro; 
    }
    getFullName = () => {
        console.log(`El usuario es: ${this.nombre} ${this.apellido}`);
    }
    addMascota = () => {
        Usuario.mascotas.push();
        console.log("mascotas agregada")
    }
    countMascota = () => {
        let cantidadDeMascotas = Usuario.mascotas.lentgh()
        console.log(cantidadDeMascotas);
    }
    addBook = (nombre, autor) => {
        let libro = new Libro (nombre, autor)  
        console.log(`Al usuario le gusta ${libro.nombre} de ${libro.autor}`)
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

let pablo = new Usuario("pablo", "cristini");
pablo.getFullName()
pablo.addBook("Harry Potter", "fedklen")
pablo.addMascota("perro")










