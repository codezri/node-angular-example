import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.scss']
})
export class MyitemsComponent implements OnInit {
  items:any = [];
  isLoading:boolean = true;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadItemsList();
  }

  loadItemsList() {
    this.itemService.getItems().subscribe(
      (result:any) => {
        this.isLoading = false;
        this.items = result.items;
      },
      (error) => {
        this.items = [];
      }
    );
  }

  deleteItem(_id: string) {
    this.itemService.deleteItem(_id).subscribe(
      (result) => {
        this.loadItemsList();
      },
      (error) => {

      }
    );
  }

}
