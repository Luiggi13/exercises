// Define la función findTheOldest que toma un array de objetos people como argumento.
function findTheOldest(people) {
    // Obtiene el año actual usando el objeto Date y el método getFullYear().
    const currentYear = new Date().getFullYear();
  
    // Utiliza el método reduce para encontrar la persona más mayor en el array people.
    // Reduce toma una función de callback y un valor inicial (en este caso, no se proporciona un valor inicial).
    const oldestPerson = people.reduce((oldest, person) => {
      // Calcula la edad de la persona actual en el bucle.
      // Si la persona tiene un año de muerte, calcula la diferencia entre el año de muerte y el año de nacimiento.
      // Si la persona no tiene un año de muerte, calcula la diferencia entre el año actual y el año de nacimiento.
      const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
      
      // Calcula la edad de la persona más mayor actualmente en la variable oldest.
      // Si la persona más mayor tiene un año de muerte, calcula la diferencia entre el año de muerte y el año de nacimiento.
      // Si la persona más mayor no tiene un año de muerte, calcula la diferencia entre el año actual y el año de nacimiento.
      const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
      
      // Compara las edades de la persona actual y la persona más mayor.
      // Si la edad de la persona actual es mayor, devuelve la persona actual como la persona más mayor.
      // Si no, devuelve la persona más mayor actual.
      return age > oldestAge ? person : oldest;
    });
  
    // Devuelve el objeto de la persona más mayor encontrada en el array people.
    return oldestPerson;
  }
  
  // Exporta la función findTheOldest para que pueda ser utilizada en otros archivos.
  module.exports = findTheOldest;
  