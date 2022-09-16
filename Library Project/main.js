//Define variables already in the DOM
const bookCardContainer = document.querySelector(".book-card-wrapper");
const bookTitle = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const readStatus = document.querySelector("#read-status");
const bookSubmit = document.querySelector(".book-form__submit-btn");

// Define array for all books
let myLibrary = []

// // 1. The old way of creating objects - with constructor functions
// function Book(title, author, pages, readStatus) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.readStatus = readStatus
// }

// // Add method on the prototype so it's accessible to all sub-objects
// Book.prototype.getInfo = () => `${this.title} by ${this.author}. ${this.pages} pages, ${this.readStatus}`

// // Instantiating new objects
// const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 542, 'Done reading')
// const lordOfTheRings = new Book('LOTR', 'J. R. R. Tolkien', '941', 'Still reading')
// const harryPotter = new Book('Harry Potter', 'J. K. Rowling', '302', 'Not yet read')

// 2. Using factory functions
const Book = (title, author, pages, readStatus) => {
  const getInfo = () => console.log(`${title} by ${author}. ${pages} pages, ${readStatus}`);

  return { title, author, pages, readStatus, getInfo } // since same variable + same object property we're creating, we use the shorthand instead of {title: title, author: author}
}

// Creating novel which inherits factory function property - getInfo
const Novel = (title, author, pages, readStatus) => {
  const { getInfo } = Book(title, author, pages, readStatus);

  // To use the Book properties, you have to return them as well
  return { title, author, pages, readStatus, getInfo }
}

const diaryNgPanget = Novel('Diary ng panget', 'jermoe', 42, 'Not yet read')
const theHobbit = Book('The Hobbit', 'J. R. R. Tolkien', 542, 'Done reading')
const lordOfTheRings = Book('LOTR', 'J. R. R. Tolkien', 941, 'Still reading')
const harryPotter = Book('Harry Potter', 'J. K. Rowling', 302, 'Not yet read')



// Inserting those objects into the array
myLibrary = [theHobbit, lordOfTheRings, harryPotter, diaryNgPanget]

// Function declarations
function displayBooks() {
  myLibrary.forEach(book => {
    console.log(book)
    // create book card & delete button
    const div = document.createElement('div')
    const delBtn = document.createElement('button')

    // Add text to delete button
    delBtn.innerText = 'Delete'

    // add class names to created elements
    div.classList.add("book-card")
    delBtn.classList.add('book-card__delete-btn')

    // add delete to nodelist
    delBtn.addEventListener('click', deleteBook)

    div.innerHTML = `
    <h3 class="book-card__title">${book.title}</h3>
    <p class="book-card__author">${book.author}</p>
    <p class="book-card__pages">${book.pages}</p>
    <p class="book-card__read">${book.readStatus}</p>
    `
    div.appendChild(delBtn)

    bookCardContainer.appendChild(div);
  })
}

function addBook(e) {
  e.preventDefault()
  // Define then add object to the array
  let obj = Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatus.value);
  myLibrary.push(obj)

  // create book card & delete button
  const div = document.createElement('div')
  const delBtn = document.createElement('button')

  // Add text to delete button
  delBtn.innerText = 'Delete'

  // add class names to created elements
  div.classList.add("book-card")
  delBtn.classList.add('book-card__delete-btn')

  // add delete to nodelist
  delBtn.addEventListener('click', deleteBook)

  div.innerHTML = `
    <h3 class="book-card__title">${bookTitle.value}</h3>
    <p class="book-card__author">${bookAuthor.value}</p>
    <p class="book-card__pages">${bookPages.value}</p>
    <p class="book-card__read">${readStatus.value}</p>
    `
  div.appendChild(delBtn)

  bookCardContainer.appendChild(div);
}

function deleteBook(e) {
  let bookTitle = e.target.parentElement.firstElementChild;
  let bookToFind = bookTitle.innerText;
  myLibrary.forEach((book, ind) => {
    if (book.title === bookToFind) {
      myLibrary.splice(ind, 1)
      bookTitle.parentElement.remove()
    }
  })
}

// Event listeners
// Load everything when DOM loads
document.addEventListener("DOMContentLoaded", displayBooks)
// Add book-card
bookSubmit.addEventListener('click', addBook)