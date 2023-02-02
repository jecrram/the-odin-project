function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;

  this.getInfo = function getInfo() {
    console.log(this.title, this.author, this.pages, this.readStatus);
  };
}

const theHobbit = new Book("The LOTR", "JRR Tolkien", 535, "Want to Read");

theHobbit.getInfo();
