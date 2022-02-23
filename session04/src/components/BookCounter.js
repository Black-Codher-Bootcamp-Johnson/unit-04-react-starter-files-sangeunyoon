import React from "react";
import "./BookCounter.css";


const BookCounter = (props) => {
  return (
    <main>
      <h2>{props.library.name}'s Books</h2>
      <button onClick={() => props.refreshBooks()}>Refresh Books</button>
      <div className="booklist">
       <ul>
        {props.library.books.map((book) => (
          <li>
            <h3>{book.volumeInfo.title}</h3>
            <img src={book.volumeInfo.imageLinks.thumbnail}/>
            <p> Description: {book.volumeInfo.description}</p> 
         <ul>
           {book.volumeInfo.authors.map((author) =>(
           <li>{author}</li>
           ))}
         </ul>
          <div>price: £ {book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount}</div>

          <div>Average Ratings : {book.volumeInfo.averageRating}</div>
          </li>
        ))}
      </ul>
      </div>
    </main>

  );
};

export default BookCounter;