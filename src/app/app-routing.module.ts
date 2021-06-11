import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './home-page/search-page/search-page.component';

const routes: Routes = [{
  'path':'home',component:HomePageComponent,
  children:[
    { path: 'search', component: SearchPageComponent },
    {
      path:'books',component:BookDetailsComponent
    },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
  ]
},
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
