import { Component } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listData = [];

  constructor(private dataService: DataService) {
    console.log('const tab2');
    this.loadData();
  }

  async loadData() {
    const data = await this.dataService.getData();
    this.listData = data;
  }

  async addData() {
    await this.dataService.addData(`Simon ${Math.floor(Math.random() * 100)}`);
    this.loadData();
  }

  async removeItem(index) {
    this.dataService.remvoveItem(index);
    this.listData.splice(index, 1);
  }

  reload(){
    this.loadData();
  }

}
