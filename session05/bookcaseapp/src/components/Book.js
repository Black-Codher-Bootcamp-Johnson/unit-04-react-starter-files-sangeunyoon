import React from 'react';

function Book (props) {
const { id,
  saleInfo: {retailPrice},
  volumeInfo: {
  title,
  authors,
  description,
  imageLinks: {thumbnail}
  }
  } = props.book;
    return (
  <div className="book">
  <img src={thumbnail} alt="thumbnail"/>
   <div>
   <h2>{title}</h2>
   <p> {authors} </p>
   <p> {description} </p>
   <section> {retailPrice ? retailPrice.amount : 'No price define'}</section>
    <button onClick={()=>props.onClick()}>Add+</button>

   </div>
  </div>
)}
// function addBook(title){
//   console.log(`The Book ${title} was clicked`)
 
// }

export default Book; 
