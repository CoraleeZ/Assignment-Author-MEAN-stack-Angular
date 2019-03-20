import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  ed:any={name:null,id:null};
  err:any;

  constructor(
    private _editauthor: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){};

  ngOnInit() {
    this.err=0;
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._editauthor.getOneTask(params['id'])
      .subscribe(data=>{
        console.log('get one :',data);
        let dataall=data;
        if(data[0].name=='CastError'){
          this.err=1;
        }else{
          this.ed.name=dataall[0].name;
          this.ed.id=params['id'];
        }
      });
    });  
  }

  editauthor(id:any){
      if(this.ed.name.length<3){
        let str='Name must has at least 3 characters';
        this.err.push(str)
      }
      else{
        this._editauthor.updateOneTask(id,this.ed)
        .subscribe(data=>{
          console.log('edit author:', data)
          this._router.navigate(['/']);
        });
      }
  }

}
