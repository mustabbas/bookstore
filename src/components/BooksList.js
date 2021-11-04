import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books.js';
import '../App.css';

const BooksList = (props) => {
  const dispatch = useDispatch();
  const removeBookFromoStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className ="container row-wrapper border mt-3 p-3">
    <div className="row">
        <div className="col">
        <span className = "category">{props.category}</span>
        <h3 className ="title">{props.title}</h3>
        <span className = "author">{props.Author}</span>
        <ul className ="d-flex p-0 mt-3">
            <li className ="author  p-2">Comments</li>
            <li className ="author   border-start p-2"><a href = "#" onClick ={() => removeBookFromoStore(props.id)}>Remove</a></li>
            <li className ="author  border-start p-2">Edit</li>
        </ul>
        </div>
        <div className="col d-flex border-end my-5">
        <div className="rounded-circle Oval-2"></div>
        <div className ="d-flex flex-column">
        <span className ="PercentComplete"> 64%</span>
        <span className = "Completed">Completed</span>
        </div>
        </div>
        <div className="col d-flex justify-content-center align-items-start flex-column m-5">
        <span className ="CurrentChapter">Current Chapter</span>
        <span className ="CurrentLesson">Chapter 17</span>
        <button className = "Rectangle-2 btn btn-primary">Update progress</button>
        </div>
    </div>
    </div>
  );
};

export default BooksList;