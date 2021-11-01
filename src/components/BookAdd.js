import React from 'react';

const BookAdd = () => (
   <div className = "container mt-3 mb-3">
       <h3>ADD NEW BOOK</h3>
       <form className="row">
        <div className="col-12 col-lg-6">
            <div className="input-group">
            <input type="text" className="form-control" id="Author" placeholder="Book title" />
            </div>
        </div>
        <div className="col-12 col-lg-2">
            <div className="input-group">
            <input type="text" className="form-control" id="Author" placeholder="Book Author" />
            </div>
        </div>
        <div className="col-12 col-lg-2">
            <select className="form-select" id="Category">
            <option selected>Category</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            </select>
        </div>
        <div className="col-12 col-lg-2">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
   </div>
);

export default BookAdd;