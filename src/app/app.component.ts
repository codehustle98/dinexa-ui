import { Component } from '@angular/core';
const ELEMENT_DATA: any[] = [
  {item: 'Chicken Rice', quantity: 2, price: 1.0079},
  {item: 'Cilly chicken', quantity: 3, price: 4.0026},
  {item: 'Naan', quantity: 2, price: 6.941},
  {item: 'Meals', quantity: 3, price: 9.0122},
  {item: 'Chicken Biriyani', quantity: 3, price: 10.811},
  {item: 'Mutton Biriyani', quantity: 6, price: 12.0107},
  {item: 'Pizza', quantity: 2, price: 14.0067},
  {item: 'Burger', quantity: 7, price: 15.9994},
  {item: 'Lassi', quantity: 3, price: 18.9984},
  {item: 'Icecream', quantity: 19, price: 20.1797},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dinexa-ui';
  displayedColumns: string[] = ['item', 'quantity', 'price', 'action'];
  dataSource = ELEMENT_DATA;
}
