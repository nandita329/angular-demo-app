import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post.service';
import { AppError } from 'app/common/app-error';
import { NotFoundError } from 'app/common/not-found-error';
import { BadInput } from 'app/common/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private service : PostService) { 
   
  }

  ngOnInit() {
    // this.service.getAll()
    // .subscribe( 
    // response => {
    //   this.posts = response.json()
    // })   

    // by map operateor we are sending all the post json so no need to pass respone here
    this.service.getAll()
    .subscribe( 
    posts => {
      this.posts = posts
    })
  }

  createPost(input : HTMLInputElement){
    let post = {title : input.value}
    this.posts.splice(0,0,post)

    input.value = '';

    this.service.create(post)
    .subscribe(
      newPost => {
      post['id'] = newPost.id
    },
    (error : AppError) =>{
      this.posts.splice(0,1)
      if(error instanceof BadInput){
        // this.form.setErrors(error.originalError); // we can sow like validation error message in our form
      }else throw error;
    })
  }

  updatePost(post){
    post.title = "updated"
    this.service.update(post)
    .subscribe(
      updatedPost => {
      console.log(updatedPost)
    })
  }

  deletePost(post){
    let index = this.posts.indexOf(post)
    this.posts.splice(index,1)
    
    this.service.delete(post.id)
    .subscribe(
      null,
    (error : AppError) =>{
      
      this.posts.splice(index,0,post);

      if(error instanceof NotFoundError){
        alert("This post has already been deleted");
      }else throw error;
    })
  }

  
}
