class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }
  getFullName() {
    return `Buenos dias mi nombre es ${this.nombre} ${this.apellido} .`;
  }

  addBooks = function (titulo, autor) {
    this.libros.push({ titulo, autor });
  };

  getBookName = function () {
    let nameBooks = this.libros.map(function (element) {
      return `${element.titulo}`;
    });
    return `Mis libros son : ${nameBooks}.`;
  };

  addMascota = function (mascota) {
    this.mascotas.push(mascota);
  };
  countMascotas = function () {
    return `El total de mis mascotas es de ${this.mascotas.length}`;
  };
}

let usuario1 = new Usuario("Nahuel", "Perez");
let usuario2 = new Usuario("Juan", "Lopez");

usuario1.addBooks("El señor de los anillos", "J. R. R. Tolkien");
usuario1.addBooks("El almohados de plumas", "Horacio Quiroga");

usuario2.addBooks("El Alquimista", "Paulo Coelho");
usuario2.addBooks("Lo que el viento se llevó", "Margaret Mitchell");
usuario2.addBooks("El Código da Vinci", "Dan Brown");

usuario1.addMascota("Perro");
usuario1.addMascota("Tortuga");
usuario1.addMascota("Gato");

console.log(usuario1.getFullName());
console.log(usuario1.getBookName());
console.log(usuario1.countMascotas());
console.log(usuario2.getFullName());
console.log(usuario2.getBookName());
console.log(usuario2.countMascotas());
