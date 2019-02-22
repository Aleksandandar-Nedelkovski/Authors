import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() authorToShow: any;
  author: any;
  updatedAuthor: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.updatedAuthor = {
      name: ''
    }
    this._route.params.subscribe((params: Params) => {
      this.getOneAuthor(params['id'])
    });
  }
  editAuthor() {
    this._httpService.editAuthor(this.updatedAuthor).subscribe(author => {
      this.author = author['data']
      this.goToDashboard();
    })
  }
  getOneAuthor(id: string) {
    this._httpService.getAuthor(id).subscribe(author => {
      this.updatedAuthor = author['data']
    })
  }
  goToDashboard() {
    this._router.navigate(['/']);
  }
}