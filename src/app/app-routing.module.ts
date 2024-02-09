import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SkilsComponent } from './pages/skils/skils.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'Home',
    pathMatch:'full'
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'About',
    component:AboutComponent,
  },
  {
    path:'Services',
    component:ServicesComponent
  },
  {
    path:'Projects',
    component:ProjectsComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Logup',
    component:LoginComponent
  },
  {
    path:'Skils',
    component:SkilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
