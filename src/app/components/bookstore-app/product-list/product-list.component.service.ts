import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { book } from './model/book';

@Injectable()

export class BookService{
    private url = 'https://sheet.best/api/sheets/2a53a528-a0c3-45e4-9f0e-000b82a2c8f5';
    httpOptions = {
        Headers: new HttpHeaders({'content-type' : 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url);
    }
}