let addBookBtn = document.querySelector(".add-btn")
let newBookBtn = document.querySelector(".new-book-btn")


let popupForm = document.querySelector(".popup-form")
let closeFormButton = document.querySelector(".close-form-btn")

closeFormButton.addEventListener("click", () => {
  popupForm.style.transform = "scale(0)"
  popupForm.style.transition = "ease .4s all"
})

newBookBtn.addEventListener("click", () =>{
  popupForm.style.transform = "scale(1)"
  popupForm.style.scale = "1"
  popupForm.style.transition = "ease .4s all"
} )
let myLibrary = []

function Book(title, author){
  this.title = form.value.title;
  this.author = form.value.author;
  this.pages = form.value.pages;
  this.read = form.read.checked

}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function newBookForm(){

}