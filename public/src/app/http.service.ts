import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {};

  getAllTask(){
    return this._http.get('/api/tasks');
  };
  
  getOneTask(id:any){
    return this._http.get('/api/tasks/'+id);
  };

  createOneTask(data){
    return this._http.post('/api/tasks',data);
  };
///
  // insertManyTask(data){
  //   return this._http.post('/api/all/tasks',data);
  // };
///
  updateOneTask(id:any,data){
    return this._http.put('/api/tasks/'+id,data);
  };

  deleteOneTask(id:any){
    return this._http.delete('/api/tasks/'+id);
  };
///
  // deleteAllTask(){
  //   return this._http.delete('/api/tasks');
  // };
///

}
