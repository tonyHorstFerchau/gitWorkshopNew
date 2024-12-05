import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions'
import { BookService } from "./book.service";
import { map, mergeMap, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.AddBook),
        mergeMap((action) => this.bookService.addBook(action)
    .pipe(
        map(book => bookActions.AddBook_Success(book)), 
        catchError((error) => of(bookActions.AddBook_Failure({error})
        ))
        ))
    )
);

    constructor(private actions$: Actions, private bookService: BookService) {

    }
}