//// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
      fetch("https://gutendex.com/books?ids=")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch(error => console.log(error))
