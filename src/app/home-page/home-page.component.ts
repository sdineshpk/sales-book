import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface MenuItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menuItems:MenuItem[]=[{
    label: 'Search',
    icon: 'search'
  },
  {
    label: 'Cart',
    icon: 'add_shopping_cart'
  },
  {
    label: 'My Collection',
    icon: 'collections'
  }]

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  routePage(item:any){
    this.router.navigate(['/home/search']);
  }

}
