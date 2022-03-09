import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
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
    <div className="book" data-id={id}>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <dl>
        <div>
          <dt>Authors</dt>
          {authors ? authors.map(author => <dd key={author}>{author}</dd>) : <dd>{'No authors listed'}</dd>}
        </div>
        <div>
          <dt>Price</dt>
          <dd>{retailPrice ? `£${retailPrice.amount}` : 'No price listed'}</dd>
        </div>
      </dl>
      <button onClick={() => props.onClick()}>Add +</button>
    </div>
  );
}


Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired
      })
    })
  })
};

Book.defaultProps = {
  volumeInfo: { description: "No description…" },
  saleInfo: { retailPrice: { amount: 0 } }
};

export default Book;
