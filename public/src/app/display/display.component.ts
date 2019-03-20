import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  authors:any=[];

  constructor(
    private _display: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};

  ngOnInit() {
    this.authors=[];
    this._display.getAllTask()
    .subscribe(data=>{
      console.log('get all:',data);
      let getallauthors:any=data;
      //sort alphabetically
      let temp={name:{}};
      let forsort=[];

      for(let x=0;x<getallauthors.length;x++){
        temp[getallauthors[x].name]=getallauthors[x];
        forsort.push(getallauthors[x].name);
      };

      forsort.sort();

      for(let y=0;y<forsort.length;y++){
        let key=forsort[y];
        let val=temp[key];
        this.authors.push(val);
      };
      //
    });
  }

  deleteauthor(id:any){
    this._display.deleteOneTask(id)
    .subscribe(data=>{
      console.log('delete one:',data);
      this.ngOnInit();
    });
  }

}
