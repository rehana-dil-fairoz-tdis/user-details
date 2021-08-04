import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../user/users';
// import { ServiceService } from '../service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  users: any;
  userData: Users = new Users();

  constructor(
    // private service: ServiceService,
    private route: Router,
    public actRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}
  
  ngOnInit() {
    // this.id=this.actRoute.snapshot.params['id'];
    this. load();
 
  }

  // loadUsers() {
  //   return this.service.getUser().subscribe((data: any) => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }
    load() {
    this.apiService.getData().subscribe((data: any) => {
      this.users = data;
    })
  }
}