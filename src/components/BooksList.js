import React from 'react';
import '../App.css';

const BooksList = (props) => (
    <div className ="container border mt-3 p-3">
    <div className="row">
        <div className="col m-3">
        <span>Action</span>
        <h3>{props.title}</h3>
        <span>{props.Author}</span>
        <ul className ="d-flex">
            <li className ="m-3">Comments</li>
            <li className ="m-3">Remove</li>
            <li className ="m-3">Edit</li>
        </ul>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
        <div className="rounded-circle Oval-2 m-3"></div>
        <div className ="d-flex flex-column">
        <span> 64%</span>
        <span>Completed</span>
        </div>
        </div>
        <div className="col d-flex flex-column m-5">
        <span>Current Chapter</span>
        <span>Chapter 17</span>
        <button className = "btn btn-primary">Update progress</button>
        </div>
    </div>
    </div>
);

export default BooksList;