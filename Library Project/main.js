const bookCardContainer = document.querySelector(".book-card-wrapper");
const bookTitle = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const readStatus = document.querySelector("#read-status");
const bookSubmit = document.querySelector(".book-form__submit-btn")

bookSubmit.addEventListener('click', function (e) {
  e.preventDefault()
  bookTitle.value
  bookAuthor.value
  bookPages.value
  console.log(readStatus.checked)
})
// console.log(bookCardContainer)

// Constructor function - old way
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  // this.info = function () {
  //   return `${title} by ${author}. ${pages} pages, ${read}`
  // }
}

function addBookToLibrary() {

}

// Since we don't want to add methods to the new Book instance every time, we add the method to prototype
Book.prototype.getInfo = function () {
  return `${this.title} by ${this.author}. ${this.pages} pages, ${this.read}`
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 542, 'Done reading')
const lordOfTheRings = new Book('LOTR', 'J. R. R. Tolkien', '941', 'Still reading')
const harryPotter = new Book('Harry Potter', 'J. K. Rowling', '302', 'Not yet read')

//However the recommended method of setting specified prototypes is using Object.create(proto,)
// theHobbit.prototype = Object.create(Book.prototype)

console.log(theHobbit.getInfo())



// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;

//   // this.info = function () {
//   //   return `${title} by ${author}. ${pages} pages, ${read}`
//   // }
// }
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
// let myLibrary = [theHobbit, 'Michael\'s book', 'Bible']

// function displayBook() {
//   myLibrary.forEach((book) => {
//     bookCardContainer.innerHTML += `
//     <div class="book-card">
//     <h3 class="book-card__title">${book.title}</h3>
//     <p class="book-card__author">${book.author}</p>
//     <p class="book-card__pages">${book.pages}</p>
//     <p class="book-card__read"${book.read}></p>
//     <button class="book-card__remove-btn">Remove</button>
//   </div>
//     `
//   })
// }

// function addBook() {
//   console.log('hello')
// }

// function removeBook() {

// }

// displayBook()

// const showAddBookForm = document.querySelector(".btn--add-book");
// const bookFormModal = document.querySelector(".book-form-modal");
// console.log(showAddBookForm)

// showAddBookForm.addEventListener('click', (e) => {
//   console.log(e)
//   bookFormModal.classList.toggle('active')
// })
// // console.log(myLibrary)

