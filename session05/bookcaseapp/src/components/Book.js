import React from 'react';

function Book (props) {}
const { id,
  saleInfo: {retailPrice},
  volumeInfo: {
  title,
  authors,
  description,
  imageLinks: {thumbnail}
  }
  } = book;
  <div className="book">
  <img src={thumbnail} alt="thumbnail"/>
   <div>
   <h2 title={title}>{title}</h2>
   </div>
  </div>
  
export default Book;
