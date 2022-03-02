import React,{useState} from 'react';
import Book from './components/Book';
import bookList from './models/books.json';
import BookList from './components/BookList';


function App() {
  const [books] = useState(bookList);
  
  return <BookList books={books} addBook= {addBook}/>;
  
    
}

function addBook(title){
  console.log(`The Book ${title} was clicked`)
 
}

export default App;

