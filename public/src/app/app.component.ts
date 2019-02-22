import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Favorite Authors';
  authors = [];
  newAuthor: any;
  updatedAuthor: any;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
  }

  getOneAuthor(id: string) {
    this._httpService.getAuthor(id).subscribe(author => this.authors = author['data'])
  }
}
