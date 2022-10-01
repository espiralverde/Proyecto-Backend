class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(`El nombre de usuario es: ${this.nombre} ${this.apellido}`)
    }

    addMascotas(nombreMascota){
        this.mascotas.push(nombreMascota)
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})

    }

    getBookNames() {
        for (let name of this.libros) {
         console.log(name.nombre);
        }
     }
}
const nombre = "Roberto"
const apellido = "Gomez Bolaños"
const libros = [{
            nombre: "Libro_1",
            autor: "Autor_1"
            },
            {
            nombre: "Libro_2",
            autor: "Autor_2"
            }]
const mascotas = ["Perro", "Gato", "Conejo"]


const usuario = new Usuario (nombre, apellido, libros, mascotas)
usuario.getFullName()
usuario.addMascotas("pájaro")
console.log(mascotas)
usuario.countMascotas()
usuario.addBook("Libro_3", "Autor_3")
console.log(libros)
usuario.getBookNames()



// console.log("***********************************************************************")



