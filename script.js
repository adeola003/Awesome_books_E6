import { Book } from "./modules/books.js";
import { DateTime } from './modules/luxon.js';

let booklist = [];
const submitBtn = document.getElementById('add-btn');
const form = document.getElementById('form');
const bookTitle = document.getElementById('book-title');
const author = document.getElementById('author');
  
 const bookList = document.querySelector('.list-link');
 const addList = document.querySelector('.add-class');
 const contactList = document.querySelector('.contact-link');
 
 const library = document.getElementById('library');
 const inputSection = document.getElementById('adding-form');
 const contactSection = document.getElementById('contact');
 const welcome = document.getElementById('welcome');
 const footer = document.getElementById('foot');

// Event listener to add books

submitBtn.addEventListener('click', (e) => {
    const book = new Book();
    e.preventDefault();
    if (bookTitle.value !== '' && author.value !== '') {
      book.addBooks(bookTitle.value, author.value);
      form.reset();
      book.displayBooks();
    } else {
      alert('fill the required fields before submiting!');
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const load = new Book();
    load.loadFromStorage();
  });

//   function to initialize display

const initialize = () => {
    const message = document.createElement('p');
    message.innerHTML = `Welcome to your library with all your favorite books!<br>
    This tool wll help you managing your library and here are the guidelines for navigation:<br>
    In the navigation bar, Click on "list" to display all your books with authors, <br>
     click on "Add new" to add new books and "contact" to get in touch. Have fun! 
    `
    welcome.appendChild(message);
    welcome.classList.add('welcome')
    library.classList.add('disabled');
    inputSection.classList.add('disabled');
    contactSection.classList.add('disabled');
    footer.style.position = 'absolute'
}

window.addEventListener("load", initialize);
  
// Event listener to automatically display content related to clicked link

  
bookList.addEventListener('click', (e) => {
  e.preventDefault();

  library.style.display = 'block';
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
  welcome.style.display = 'none';
});

addList.addEventListener('click', (e) => {
  e.preventDefault();
  library.style.display = 'none';
  inputSection.style.display = 'block';
  contactSection.style.display = 'none';
  welcome.style.display = 'none';
});

contactList.addEventListener('click', (e) => {
  e.preventDefault();
  library.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'block';
  welcome.style.display = 'none';
});

// Date

const time = document.querySelector('#date-container');
const date = new Date();
time.textContent = `${date.toDateString()}`;

setInterval(() => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = `${date}`;
}, 1000);
console.log(time)
 