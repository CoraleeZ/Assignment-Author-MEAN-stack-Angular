import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  aut={name:null};
  err=[];
  errors: any = {}

  constructor(
    private _addauthor: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};

  ngOnInit() {
  }

  addauthor(){
    if(this.aut.name.length<3){
      let str='Name must has at least 3 characters';
      this.err.push(str)
    }
    else{
      this._addauthor.createOneTask(this.aut)
      .subscribe(data=>{
        console.log('add an author:', data)
        this._router.navigate(['/']);
      });
    }
  }

}
