const Contenedor = require('./main.js')

const item1 = {
    title: "zapatillas",
    precio: "25000"
}
const item2 = {
    title: "gorra",
    precio: "5000"
}
const item3 = {
    title: "remera",
    precio: "10000"
}

async function main() {
    const contenedor = new Contenedor('./productos.txt')

    let datos = await contenedor.getAll()
    console.log(datos)

    let id1 = await contenedor.save(item1) 
    console.log(id1)

    let busqueda = await contenedor.getById(1)
    console.log(busqueda)

    await contenedor.deleteById(1)
    let borrar = await contenedor.getAll()
    console.log(borrar)

    await contenedor.deleteAll()
    let borrarTodo = await contenedor.getAll()
    console.log(borrarTodo)
}

main()