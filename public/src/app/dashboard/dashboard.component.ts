import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  authors = [];

    ngOnInit() {
  this.getAllAuthors();
}
deleteAuthor(id: string) {
  this._httpService.deleteAuthor(id).subscribe(author => this.authors = author['data'])
  this.getAllAuthors();
}
getAllAuthors() {
  this._httpService.getAuthors().subscribe(all_authors => this.authors = all_authors['data'])
}
}
