const booklist = [];
export default class Book {
  constructor() {
    this.booklist = JSON.parse(localStorage.getItem('storage-book')) || [];
  }

  updateStorage = (data) => {
    localStorage.setItem('storage-book', JSON.stringify(data));
    this.booksList = data;
  }

  // Remove title function

  removeBook = (title) => {
    const rm = new Book();
    for (let i = this.booklist.length - 1; i >= 0; i -= 1) {
      if (this.booklist[i].title === title) {
        this.booklist.splice(i, 1);
        rm.updateStorage(booklist);
        break;
      }
    }
  }

  // Function to display the book's list

  displayBooks = () => {
    document.getElementById('library').innerHTML = '<h2 class="list-title">List of books</h2>';
    this.booklist.forEach((book) => {
      const bookItem = document.createElement('div');
      const booksTable = document.getElementById('library');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
      <div class="container">
          <p>${book.title}, by ${book.author}</p>
          <button class="remove" id=${book.title}>Remove</button>
      </div>
      <hr/>
      `;
      booksTable.appendChild(bookItem);

      const removeBtn = bookItem.querySelector('.remove');
      removeBtn.addEventListener('click', () => {
        const rm = new Book();
        rm.removeBook(book.title);
        rm.displayBooks();
      });
    });
  }

  loadFromStorage = () => {
    const ld = new Book();
    const storedBookList = localStorage.getItem('bookLists');
    if (storedBookList) {
      this.booklist = JSON.parse(storedBookList);
      ld.displayBooks();
    }
  }

  // Function to add new books
  addBooks = (ttle, athr) => {
    const bk = new Book();
    const book = { title: '', author: '' };
    book.title = ttle;
    book.author = athr;
    this.booklist.push(book);
    bk.updateStorage(this.booklist);
  }
}
