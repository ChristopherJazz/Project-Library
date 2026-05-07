const openBtn = document.querySelector('.open-modal');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-overlay');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
// Close modal when clicking outside the modal box
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
})


// Library array
const myLibrary = [];

// Constructor
function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Form
const bookForm = document.querySelector('.book-form');

// Inputs
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

// Submit form
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Create unique ID
  const id = crypto.randomUUID();

  // Get values
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  // Create new book object
  const newBook = new Book(id, title, author, pages, read);

  // Store in array
  myLibrary.push(newBook);

  // Render books
  renderBooks();
   // Close modal
  modal.classList.remove('active');

  // Reset
  bookForm.reset();

});

const bookList = document.querySelector('.book-list');

// Render function
function renderBooks() {
  bookList.innerHTML = '';

  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('book-card');

    const title = document.createElement('h4');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement('p');
    read.textContent = book.read ? 'Read' : 'Not Read';

    // DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');

    // store id in dataset
    deleteBtn.dataset.id = book.id;

    // delete action
    deleteBtn.addEventListener('click', () => {
    bookToDeleteId = book.id;

    deleteMessage.textContent = `Delete "${book.title}"?`;

    deleteModal.classList.add('active');
});

    confirmDeleteBtn.addEventListener('click', () => {
      deleteBook(bookToDeleteId);
      deleteModal.classList.remove('active');
});

    cancelDeleteBtn.addEventListener('click', () => {
      deleteModal.classList.remove('active');
      bookToDeleteId = null;
});
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteBtn);

    bookList.appendChild(card);
  });
}

function deleteBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);

  if (index !== -1) {
    myLibrary.splice(index, 1);
    renderBooks();
  }
}

const deleteModal = document.querySelector('.delete-modal-overlay');
const deleteMessage = document.querySelector('.delete-message');
const confirmDeleteBtn = document.querySelector('.confirm-delete');
const cancelDeleteBtn = document.querySelector('.cancel-delete');

let bookToDeleteId = null;