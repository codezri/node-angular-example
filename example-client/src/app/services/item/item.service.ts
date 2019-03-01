import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://localhost:5000/api/v1/items');
  }

  addItem(item: Item) {
    return this.http.post('http://localhost:5000/api/v1/items', item);
  }

  deleteItem(_id) {
    return this.http.delete(`http://localhost:5000/api/v1/items/${_id}`);
  }
}
