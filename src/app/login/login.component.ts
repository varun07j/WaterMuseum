import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Login } from './login';

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class LoginComponent implements OnInit {
  item: Login;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
