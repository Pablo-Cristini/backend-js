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
    
}

main()

