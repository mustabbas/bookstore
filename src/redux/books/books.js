const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [

  ],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          {
            title: action.payload.title,
            author: action.payload.author,
            id: action.payload.id,
          },
        ],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [
          ...state.books.filter((element) => element.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default booksReducer;
