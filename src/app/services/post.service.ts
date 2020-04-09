import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService{
  // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts',http)
   }


  //We create a reusable data service for all http request

  // getPosts(){
  //   return this.http.get(this.url)
  // }

  // createPost(post){
  //   return this.http.post(this.url,JSON.stringify(post))
  //   .catch(this.handleError);
  // }

  // updatePost(post){
  //   return this.http.put(`${this.url}/${post.id}`,JSON.stringify(post));
  // }

  // // deletePost(id){
  // //   return this.http.delete(`${this.url}/${id}`)
  // //   .catch((error : Response) =>{
  // //     if (error.status === 503){
  // //       return Observable.throw(new NotFoundError());
  // //     }else{
  // //       return Observable.throw(new AppError(error.json()));
  // //     }
  // //   });
  // // }

  // deletePost(id){
  //   return this.http.delete(`${this.url}/${id}`)
  //   .catch(this.handleError);  // insted of checking everywhere error we crate reusable error handle method
  // }

  // private handleError(error: Response){
  //   if (error.status === 400)
  //     return Observable.throw(new BadInput(error.json()));

  //   if (error.status === 503)
  //     return Observable.throw(new NotFoundError());

  //     return Observable.throw(new AppError(error.json()));
    
  // }
}
