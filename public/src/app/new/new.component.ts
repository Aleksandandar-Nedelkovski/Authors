import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  authors = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor = { name: " " };
  }
  createAuthor() {
    console.log(this.newAuthor);
    this._httpService.createAuthor(this.newAuthor).subscribe(author => {
      this.newAuthor = { name: " " }
      this.goToDashboard();
    })
  }
  goToDashboard() {
    this._router.navigate(['dashboard']);
  }
}
