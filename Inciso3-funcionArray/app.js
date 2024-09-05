function agruparPorPropiedad(array, propiedad) {
    try {
      return array.reduce((resultado, objeto) => {

        if (!objeto.hasOwnProperty(propiedad)) {
          throw new Error(`El objeto no tiene la propiedad "${propiedad}".`);
        }
  
        // Obtén el valor de la propiedad actual del objeto
        const clave = objeto[propiedad];
  
        // Si el resultado no tiene una entrada para esta clave, crea una nueva array
        if (!resultado[clave]) {
          resultado[clave] = [];
        }
  
        // Añade el objeto al array correspondiente
        resultado[clave].push(objeto);
  
        return resultado;
      }, {});
    } catch (error) {
      console.error('Error al agrupar por propiedad:', error.message);
      return {};
    }
  }
  
  // Ejemplo de uso:
  const arrayDeObjetos = [
    { id: 1, categoria: 'Categoria1', valor: 10 },
    { id: 2, categoria: 'Categoria2', valor: 20 },
    { id: 3, categoria: 'Categoria3', valor: 30 },
    { id: 4, categoria: 'Categoria4', valor: 40 },
    { id: 5, categoria: 'Categoria5', valor: 50 }
  ];
  
  const resultado = agruparPorPropiedad(arrayDeObjetos, 'categoria');
  console.log(resultado);
  