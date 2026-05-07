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

   // Close modal
  modal.classList.remove('active');

  // Reset
  bookForm.reset();

  // Test
  console.log(myLibrary);
});