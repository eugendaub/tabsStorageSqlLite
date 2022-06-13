import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  listData = [];

  constructor(private dataService: DataService) {
    console.log('const tabOverView');
    this.loadData();
  }

  async loadData() {
    const data = await this.dataService.getData();
    this.listData = data;
  }

  async removeItem(index) {
    this.dataService.remvoveItem(index);
    this.listData.splice(index, 1);
  }

  ngOnInit() {
  }

}
