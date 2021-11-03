const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';

const initialState = {
  books: [],
};

export const getBooks = () => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HWI0nuwLxi4EF8iPxdXg/books')
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: resResponse,
    }));
};

export const addBook = (payload) => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HWI0nuwLxi4EF8iPxdXg/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => dispatch(getBooks()));
};

export const removeBook = (payload) => (dispatch) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HWI0nuwLxi4EF8iPxdXg/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => dispatch(getBooks()));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
