import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from 'app/services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-pages',
  templateUrl: './github-pages.component.html',
  styleUrls: ['./github-pages.component.css']
})
export class GithubPagesComponent implements OnInit {
  followers : any[];
  constructor(private route : ActivatedRoute, private service : GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).switchMap(combined => {
      let id = combined[0].get('id')
      let page = combined[1].get('page')

      //Here we can call our service to get all methods 
      return this.service.getAll()
    }).subscribe(followers => this.followers = followers)
  }

}
