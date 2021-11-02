import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import BooksList from './BooksList.js';
import BookAdd from './BookAdd.js';

const Books = () => {
  const booklist = useSelector((data) => data.booksReducer.books);
  const BookItem = booklist.map((item) => (
        <BooksList title = {item.title} Author = {item.author} id ={item.id}/>
  ));
  return (
        <div>
            {BookItem}
            <BookAdd />
        </div>
  );
};

export default Books;