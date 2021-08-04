import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from './users';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name : FormControl;
  email : FormControl;
  mobile : FormControl;
  address : FormControl;
  pincode : FormControl;
  country : FormControl; 
  countries : string[] = ['India', 'Uzbekisthan', 'China', 'United States', 'Indonesia', 'Russia', 'Canada', 'Mexico', 'Bangladesh', 'Poland',
  'Malaysia', 'Iraq', 'Columbia', 'Sri Lanka', 'Belgium', 'Saudi Arabia', 'Portugal', 'Iran', 'Switzerland', 'Singapore'];
  userData: Users = new Users();
  // userForm : FormGroup;

  submitted: boolean;

  constructor(
    private route: Router,
    private act:ActivatedRoute,
    private apiService : ApiService
  ) {
    
  } 
  id=this.act.snapshot.params['id'];
  userForm = new FormGroup({
    name : new FormControl("", [Validators.required, Validators.pattern('[A-Za-z ]+')]),
    email : new FormControl("",[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    address : new FormControl("",Validators.required),
    pincode : new FormControl("", [Validators.required, Validators.minLength(5)]),
    mobile : new FormControl("",Validators.required),
    country : new FormControl('', Validators.required)
  })
  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    // this.createForm();
    this.apiService.getDataId(this.id).subscribe((data:any)=>{​​​​​​​
      this.userForm.patchValue(data);
    }​​​​​​​)
  }
   
  get f() {
    return this.userForm.controls;
  }
  onSubmit(){
    if(this.userForm.valid){
      this.submitted = true;
    }else {
       this.submitted = false;
    }
    this.userForm.reset();
  }

  click(data :any){
    if (this.userForm.invalid) {
      return;
    }
    // data.id = Math.floor(Math.random() * 1000);
    // console.log(data.id);
    console.log(data);
    this.apiService.postData(data).subscribe((data:any)=>{
      this.route.navigate(['/view'])
      })
  }

  updateData(data:any){
    console.log(data);
    this.apiService.updateData(this.id, data).subscribe(()=>{
      this.route.navigate(['/view'])
    })
  }

}
