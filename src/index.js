import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { data } from './books';
import SpecificBook from './Book';

const BookList = () => {
  return (
    <section className="booklist">
      {
        data.map((book) => {
          return (
            <SpecificBook key={book.id} {...book} />
          )
        })
      }
    </section>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'));
