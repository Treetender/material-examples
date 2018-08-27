import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Usertable2DataSource } from './usertable2-datasource';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-usertable2',
  templateUrl: './usertable2.component.html',
  styleUrls: ['./usertable2.component.css']
})
export class Usertable2Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Usertable2DataSource;

  constructor(private userService: UserService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'email', 'phone'];

  ngOnInit() {
    this.dataSource = new Usertable2DataSource(this.userService, this.paginator, this.sort);
  }
}
