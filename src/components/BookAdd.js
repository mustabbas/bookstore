import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books.js';

const BookAdd = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const onChange = (e) => {
    const { value } = e.target;
    setData({ ...data, [e.target.name]: value });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: data.title,
      category: data.Category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className = "container rowForm-wrapper mt-3 mb-3">
    <h3 className = "formTitle">ADD NEW BOOK</h3>
    <form>
      <div className = "row">
        <div className="col-12 m-2 col-lg-6">
            <div className="input-group">
            <input type="text" name = "title" onChange ={onChange} className="placholder form-control" id="title" placeholder="Book title" />
            </div>
        </div>
        <div className="col-12 m-2  col-lg-2">
            <div className="input-group">
            <input type="text" name = "author" onChange ={onChange} className="placholder form-control" id="Author" placeholder="Book Author" />
            </div>
        </div>
        <div className="col-12 m-2  col-lg-2">
            <select className="placholder form-select" name ="Category" onChange ={onChange} id="Category">
            <option selected>Category</option>
            <option value={'One'}>One</option>
            <option value={'Two'}>Two</option>
            <option value={'Three'}>Three</option>
            </select>
        </div>
        <div className="col-12 m-2  col-lg-2">
            <button type="submit" onClick={submitBookToStore} className="RectangleSubmit btn btn-primary">Submit</button>
        </div>
        </div>
    </form>
    </div>
  );
};

export default BookAdd;