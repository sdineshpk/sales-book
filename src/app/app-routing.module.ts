import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [{
  'path':'home',component:HomePageComponent,
  children:[
    { path: 'search', component: SearchPageComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
  ]
},
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
