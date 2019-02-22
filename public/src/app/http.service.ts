import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors() {
    return this._http.get('/authors');
  }
  getAuthor(id: string) {
    return this._http.get('/author/' + id);
  }
  createAuthor(author: any) {
    return this._http.post('/authors', author);
  }
  editAuthor(author: any) {
    return this._http.put('/authors/' + author._id, author);
  }
  deleteAuthor(id: string) {
    return this._http.delete('/authors/' + id);
  }
}