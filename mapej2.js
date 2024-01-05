const vengadores = [
    { nombre: "Tony", apellidos: "Stark" },
    { nombre: "Steve", apellidos: "Rogers" },
    { nombre: "Bruce", apellidos: "Banner" },
    { nombre: "Natasha", apellidos: "Romanoff" },
    { nombre: "Thor", apellidos: "Odinson" },
    { nombre: "Clint", apellidos: "Barton" },];

const nombresCompletos = vengadores.map(vengador => `${vengador.nombre} ${vengador.apellidos}`);

console.log(nombresCompletos);