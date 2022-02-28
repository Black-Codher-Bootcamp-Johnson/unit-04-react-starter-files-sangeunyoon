import React,{useState} from 'react';
import Book from './components/Book';
import bookList from './models/books.json';

function App() {
  const [books] = useState(bookList);
  return books.map(bookItem => <Book
    book={bookItem}/>);
    
}

export default App;

