//// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
fetch('https://gutendex.com/books/')
.then(resp => resp.json())
.then(res => displayBook(res));


// DISPLAY DEI LIBRI NEL DIV CON ID CONTAINER NELL'HTML
function displayBook(books) {
    const container = document.getElementById('container');
    console.log(books.results)

    // CREO LA CARD PER OGNI LIBRO (CICLO FOR OF) CHE CONTERRA' I DATI DEI LIBRI
    for (let book of books.results) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // CREO UN DIV CONTENENTE TITOLO E IMMAGINE (AI FINI DI CSS)
        const topCard = document.createElement('div');
        topCard.classList.add('top-card');
        card.appendChild(topCard);

        // TITOLO
        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = book.title;
        topCard.appendChild(title);

        // IMMAGINE
        const cover = document.createElement('img');
        cover.src = book.formats['image/jpeg'];
        cover.classList.add('image');
        topCard.appendChild(cover);

        // CREO UN DIV CONTENENTE LE INFOMAZIONI GENERALI
        const info = document.createElement('div');
        info.classList.add('info');

         // CREO UN DIV CONTENENTE GLI AUTORI
        for (let author of book.authors) {
            const authorInfo = document.createElement('div');
            authorInfo.classList.add('author-info');

            // AUTORI
            const authorName = document.createElement('p');
            authorName.classList.add('author');
            authorName.innerHTML = 'Author : ' + author.name;
            authorInfo.appendChild(authorName);

            // DATA DI NASCITA E MORTE DELL'AUTORE
            const authorBirth = document.createElement('p');
            authorBirth.innerHTML = 'Author birth: ' + author.birth_year;
            authorInfo.appendChild(authorBirth);

            const authorDeath = document.createElement('p');
            authorDeath.innerHTML = 'Author death: ' + author.death_year;
            authorInfo.appendChild(authorDeath);

            info.appendChild(authorInfo);
        }

           // CREO UN DIV CHE CONTIENE I SUBJECT
           const subjectsInfo = document.createElement('div');
           subjectsInfo.innerText = 'Subjects: '
           subjectsInfo.classList.add('subject-info');

           // LISTA DI SUBJECT
           const subjectDiv = document.createElement('ul');
           for (const subject of book.subjects) {
               const subjectLi = document.createElement('li');
               subjectLi.innerText = subject;
               subjectDiv.classList.add('subject');
               subjectDiv.appendChild(subjectLi);
               subjectsInfo.appendChild(subjectDiv);
           }

        info.appendChild(subjectsInfo);

        card.appendChild(info)

        container.append(card);
    }

}