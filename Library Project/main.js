const bookCardContainer = document.querySelector(".book-card-wrapper");
const bookTitle = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const readStatus = document.querySelector("#read-status");
const bookSubmit = document.querySelector(".book-form__submit-btn");

let myLibrary = []

// Constructor function - old way
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Since we don't want to add methods to the new Book instance every time, we add the method to prototype
Book.prototype.getInfo = function () {
  return `${this.title} by ${this.author}. ${this.pages} pages, ${this.read}`
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 542, 'Done reading')
const lordOfTheRings = new Book('LOTR', 'J. R. R. Tolkien', '941', 'Still reading')
const harryPotter = new Book('Harry Potter', 'J. K. Rowling', '302', 'Not yet read')


myLibrary = [theHobbit, lordOfTheRings, harryPotter]

function addBookToLibrary(e) {
  e.preventDefault()
  let obj = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatus.value)
  myLibrary.push(obj);

  //Create
  const div = document.createElement('div');
  const button = document.createElement('button');
  div.classList.add('book-card');
  button.classList.add('remove-btn');
  button.innerText = 'Delete';
  button.addEventListener('click', removeBook)
  console.log(button)
  div.innerHTML = `
  <h3 class="book-card__title">${obj.title}</h3>
  <p class="book-card__author">${obj.author}</p>
  <p class="book-card__pages">${obj.pages}</p>
  <p class="book-card__read">${obj.read}</p>`;
  div.appendChild(button)
  bookCardContainer.appendChild(div);

  //Clear
  bookTitle.value = "", bookAuthor.value = "", bookPages.value = null, readStatus.value = "";
}

function displayBooks() {
  return myLibrary.forEach(book => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    div.classList.add('book-card');
    button.classList.add('remove-btn');
    button.innerText = 'Delete';
    button.addEventListener('click', removeBook)
    console.log(button)
    div.innerHTML = `
    <h3 class="book-card__title">${book.title}</h3>
    <p class="book-card__author">${book.author}</p>
    <p class="book-card__pages">${book.pages}</p>
    <p class="book-card__read">${book.read}</p>`;
    div.appendChild(button)
    bookCardContainer.appendChild(div);


  })
}

document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
})

bookSubmit.addEventListener('click', addBookToLibrary)

function removeBook(e) {
  const searchBook = e.target.parentElement.firstElementChild.innerText

  myLibrary.forEach((book, ind) => {
    if (book.title === searchBook) myLibrary.splice(ind, 1);
  })

  e.target.parentElement.remove()
}

const bookRemoveBtns = document.querySelectorAll(".remove-btn");