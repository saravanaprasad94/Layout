import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',
  component: LoginComponent},{  
  path: 'home',
  component: DefaultComponent,
  children: [{
    path:'dashboard',
    component: DashboardComponent
  },
    {
      path: "posts",
      component: PostsComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
