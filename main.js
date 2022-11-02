class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = []; 
        this.libros = []; 
    }
    getFullName = () => {
        console.log(`El usuario es: ${this.nombre} ${this.apellido}`);
    }
    addMascota = (mascota) => {
        this.mascotas.push(mascota);
        console.log(`se agrego la mascota ${mascota}`)
    }
    countMascota = () => {
        let cantidadDeMascotas = this.mascotas.length
        console.log(`${this.nombre} tiene ${cantidadDeMascotas} mascota`);
    }
    addBook = (nombreLibro, autor) => {
        this.libros.push(new libro(nombreLibro, autor))
    }
    getBookNames = () => {
        let array = this.libros.map(function(element){
        return element.nombreLibro;
        });
        console.log(array)
    }
}

class libro {
    constructor(nombreLibro, autor){
        this.nombreLibro = nombreLibro;
        this.autor = autor;
    }
};

let pablo = new Usuario("pablo", "cristini");
pablo.getFullName()
pablo.addMascota("perro")
pablo.countMascota()
pablo.addBook("Harry Potter", "fedklen")
pablo.addBook("Shrek", "fedklen")
pablo.getBookNames()









