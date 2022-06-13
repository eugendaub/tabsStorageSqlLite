import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listData = [];

  constructor(private dataService: DataService) {
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

}
