const personas = [
    { nombre: "Cristian", edad: 25, sexo: "M" },
    { nombre: "Ana", edad: 20, sexo: "F" },
    { nombre: "Fernando", edad: 15, sexo: "M" },
    { nombre: "Alejandra", edad: 11, sexo: "F" },];

    const sexoFemenino = personas.find(persona => persona.sexo ==="F");
    console.log(sexoFemenino);