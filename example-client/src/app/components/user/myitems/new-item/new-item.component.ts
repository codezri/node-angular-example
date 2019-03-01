import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  @Output() loadItemsEmitter: EventEmitter<any> = new EventEmitter<any>();
  item: Item = new Item();
  errorMessage: string = '';

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  loadItemsToParent() {
    this.loadItemsEmitter.emit();
  }

  addItem() {
    this.itemService.addItem(this.item).subscribe(
      (result) => {
        this.loadItemsToParent();
        this.item = new Item();
        this.errorMessage = '';
      },
      (errorResult) => {
        this.errorMessage = errorResult.error.errors.map(error => error.msg).toString();
      }
    );
  }

}
