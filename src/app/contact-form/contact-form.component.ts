import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/courses.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  courses;
  constructor(service : CourseService) { 
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  log(name){
    console.log("name",name)
  }

  submit(form){
    console.log(form.value)
  }
}
