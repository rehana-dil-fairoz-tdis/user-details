import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:"full"},
 {path:'login',component:UserComponent},
 {path:'view',component:ViewComponent},
 {path:'login/:id',component:UserComponent}
  ];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }