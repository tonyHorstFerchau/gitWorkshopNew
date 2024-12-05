import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBook_Success, AddBook_Failure } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = [];
export const bookReducer = createReducer(
    initialState,
    on(AddBook, (state) => {return state}),
    on(AddBook_Success, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(AddBook_Failure, (state, {error}) => {
        console.error(error)
        return state;
    }),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);