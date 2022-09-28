//// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
let url = 'https://gutendex.com/books/';

fetch(url).then(req => req.json()).then(resp => displayListBook(resp));

// VISUALIZZAZIONE LIBRI IN LISTA
function displayListBook(books) {
    const container = document.getElementById('container');
    console.log(books.results)
    for (let book of books.results) {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = book.title;
        card.appendChild(title);

        const cover = document.createElement('img');
        cover.src = book.formats['image/jpeg'];
        cover.classList.add('image');
        card.appendChild(cover);

        const info = document.createElement('div');
        info.classList.add('info');

        for (let author of book.authors) {
            const authorInfo = document.createElement('div');
            authorInfo.classList.add('author-info');

            const authorName = document.createElement('p');
            authorName.classList.add('author');
            authorName.innerHTML = 'Author : ' + author.name;
            authorInfo.appendChild(authorName);

            const authorBirth = document.createElement('p');
            authorBirth.innerHTML = 'Author birth: ' + author.birth_year;
            authorInfo.appendChild(authorBirth);

            const authorDeath = document.createElement('p');
            authorDeath.innerHTML = 'Author death: ' + author.death_year;
            authorInfo.appendChild(authorDeath);

            info.appendChild(authorInfo);
        }

           const subjectsInfo = document.createElement('div');
           subjectsInfo.innerText = 'Subjects: '
           subjectsInfo.classList.add('subject-info');


           const subjectDiv = document.createElement('ul');
           for (const subject of book.subjects) {
               const subjectLi = document.createElement('li');
               subjectLi.innerText = subject;
               subjectDiv.classList.add('subject');
               subjectDiv.appendChild(subjectLi);
               subjectsInfo.appendChild(subjectDiv);
           }

            info.appendChild(subjectsInfo);

      //   const download = document.createElement('p');
      //   download.classList.add('download');
      //   download.innerHTML = book.download_count + ' downloads';
      //   info.appendChild(download);

        card.appendChild(info)

        container.append(card);
    }

}