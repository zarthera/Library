let addBookBtn = document.querySelector(".add-btn")
let newBookBtn = document.querySelector(".new-book-btn")


let popupForm = document.querySelector(".popup-form")
let closeFormButton = document.querySelector(".close-form-btn")

let form = document.querySelector("#form")

closeFormButton.addEventListener("click", () => {
  popupForm.style.transform = "scale(0)"
  popupForm.style.transition = "ease .4s all"
})

newBookBtn.addEventListener("click", () =>{
  popupForm.style.transform = "scale(1)"
  popupForm.style.scale = "1"
  popupForm.style.transition = "ease .4s all"
} )

function Book(title, author, pages, read){
  this.title = form.title.value;
  this.author = "by " + form.author.value;
  this.pages = form.pages.value + " pages";
  this.read = form.read.checked;
}

let myLibrary = []
let newBook;

function renderBooks(){
  const display = document.querySelector('.library');
  const books = document.querySelectorAll('.book');
  books.forEach(book => display.removeChild(book));
  for(let i = 0; i < myLibrary.length; i++){
    createBookCard(myLibrary[i])
  }
}

function addBookToLibrary(e){
  e.preventDefault()
  popupForm.style.transform = "scale(0)"
  popupForm.style.transition = "ease .4s all"

  newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook);
  console.log(myLibrary[0].title)
  console.log(myLibrary[0].author)
  console.log(myLibrary[0].pages)
  console.log(myLibrary[0].read)
  renderBooks()
}

addBookBtn.addEventListener("click", addBookToLibrary)

function createBookCard(item){
  let library = document.querySelector(".library")
  let book = document.createElement("div")
  let title = document.createElement("div")
  let author = document.createElement("div")
  let pages = document.createElement("div")
  let read = document.createElement("button")

  book.classList.add("book")
  library.appendChild(book)

  title.textContent = item.title
  title.classList.add("title")
  book.appendChild(title)

  author.classList.add("author")
  author.textContent = item.author
  book.appendChild(author)

  pages.classList.add("pages")
  pages.textContent = item.pages
  book.appendChild(pages)

  read.classList.add("read")
  book.appendChild(read)

  console.log(item.read)

  if(item.read === true) {
    read.textContent = 'Read';
    read.style.backgroundColor = '#368526';
  }
  else {
    read.textContent = 'Not Read';
    read.style.backgroundColor = '#e04f63'
  }
  read.addEventListener("click", () => {
    if(item.read === true) {
      item.read = false
      read.textContent = 'Not Read';
      read.style.backgroundColor = '#e04f63'
      console.log(item.read)
    }
    else {
      item.read = true;
      read.textContent = 'Read';
      read.style.backgroundColor = '#368526';
    }
  })

  let removeBtn = document.createElement("button")
  removeBtn.classList.add("remove-btn")
  book.appendChild(removeBtn)
  removeBtn.textContent = "Remove"
  removeBtn.addEventListener("click", () => {
    book.style.transform = "scale(0)"
    book.style.transition = "ease .4s all"
    setTimeout(() => {myLibrary.splice(myLibrary.indexOf(item), 1)}, 350)
    setTimeout(() => {renderBooks()}, 400)
  })

}