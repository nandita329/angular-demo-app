import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPagesComponent } from './github-pages.component';

describe('GithubPagesComponent', () => {
  let component: GithubPagesComponent;
  let fixture: ComponentFixture<GithubPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
