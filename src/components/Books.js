import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from './BooksList.js';
import BookAdd from './BookAdd.js';
import { getBooks } from '../redux/books/books.js';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const BookItem = [];
  const booklist = useSelector((data) => data.booksReducer.books);
  Object.entries(booklist).forEach((element) => {
    const [key, value] = element;
    BookItem.push(value.map((item) => (
      <BooksList
       title = {item.title}
       Author = {item.title}
       category = {item.category}
       id ={key}/>
    )));
  });

  return (
        <div>
            {BookItem}
            <BookAdd />
        </div>
  );
};

export default Books;