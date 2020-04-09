import {Component} from '@angular/core';
import { CourseService } from './courses.service';

@Component ({
    selector:'courses',
    template:`
    <h2>{{title}}</h2>
    <button (click)="onAdd()">Add</button>
    <div *ngIf = "courses.length>0; else noCourses" >
    <ul>
    <li *ngFor = "let course of courses; index as i; even as isEven;">
    {{i}} - {{course}} <span *ngIf="isEven">(EVEN)</span> <button (click)="onRemove(course)">Remove</button>
    </li>
    </ul>
    </div>
    <ng-template #noCourses>No couses available</ng-template>
    
    <h1>{{course.rating | number : '1.2-2'}}</h1>
    <h1>{{course.price | currency : 'AUD':true}}</h1>
    <h1>{{course.date | date : 'shortDate'}}</h1><br/>
    {{text | summery:10}}

    `
})
export class CoursesComponent{
    title = "Courses"
    courses;
    course = {
        rating:4.9732,
        price: 345.426,
        date : new Date(2020, 3, 29)
    }

    text = "gsasgas ajjjasa ajsasjajs hahsahsha, ajsajsja ajasjasja sjajsjasjasjasas  asajsjajs asjjsj."

    constructor(service : CourseService){
        this.courses = service.getCourses();
    }

    onAdd(){
        this.courses.push('course4')
    }

    onRemove(course){
        let index = this.courses.indexOf(course);
        this.courses.splice(index,1)
    }

}