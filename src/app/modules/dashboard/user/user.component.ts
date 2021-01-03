import { Component, Input, OnInit } from '@angular/core';
import { Test } from 'src/app/core/models/test.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input()
  test:Test;

  ngOnInit(): void {
  }

}
