import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from 'app/common/not-found-error';
import { AppError } from 'app/common/app-error';
import { BadInput } from 'app/common/bad-input';

@Injectable()
export class DataService {

  constructor(private url: string ,private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError)
  }

  create(resource){
    return this.http.post(this.url,JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handleError);
  }

  update(resource){
    return this.http.put(`${this.url}/${resource.id}`,JSON.stringify(resource))
    .map(response => response.json())
  }

  // deletePost(id){
  //   return this.http.delete(`${this.url}/${id}`)
  //   .catch((error : Response) =>{
  //     if (error.status === 503){
  //       return Observable.throw(new NotFoundError());
  //     }else{
  //       return Observable.throw(new AppError(error.json()));
  //     }
  //   });
  // }

  delete(id){
    return this.http.delete(`${this.url}/${id}`)
    .map(response => response.json())
    .catch(this.handleError);  // insted of checking everywhere error we crate reusable error handle method
  }

  private handleError(error: Response){
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 503)
      return Observable.throw(new NotFoundError());

      return Observable.throw(new AppError(error.json()));
    
  }
}
