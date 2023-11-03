function encontrarPersonaMayor(peopleArray) {
    let personaMayor = null;
    let edadMayor = 0;
    const currentYear = new Date().getFullYear();
  
    for (let i = 0; i < peopleArray.length; i++) {
      const persona = peopleArray[i];
      let edad;
  
      if (persona.dead) {
        // Si la persona está fallecida, calcula su edad restando el año de nacimiento al año de fallecimiento
        edad = persona.dead - persona.born;
      } else {
        // Si la persona aún está viva, calcula su edad restando el año de nacimiento al año actual
        edad = currentYear - persona.born;
      }
  
      if (edad > edadMayor) {
        edadMayor = edad;
        personaMayor = persona;
      }
    }
  
    return personaMayor;
  }