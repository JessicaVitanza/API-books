//// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
let books = [];

    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((json) => console.log(json))

//// FUNCTION CHE PRENDE I DATI IN ENTRATA E LI VISUALIZZA SULLO SCHERMO
function objArray(obj) {
    tempArray = Object.values(obj)[1];
    displayMenu(books);
  }

//// FUNCTION CHE CREA IL TEMPLATE HTML, DOVE ANDRANNO INSERITI I DATI
function displayMenu(books) {
    const container = document.getElementById("container");

    for (const book of books) {

        const card = document.createElement("div");

        const title = document.createElement('h1');
        const textTitle = document.createTextNode('Name: ' + results.title);
        title.appendChild(textTitle);
        card.appendChild(title);


        const listContainer = document.createElement('div');
     const speedSpan = document.createElement('span');
     const speedNode = document.createTextNode("Authors : " + results.authors);
     speedSpan.appendChild(speedNode);
     listContainer.appendChild(speedSpan);


        container.appendChild(card);
    }
}