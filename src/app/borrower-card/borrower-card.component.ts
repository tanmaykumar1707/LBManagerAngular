import { RenderModel } from './../models/RenderModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'borrower-card',
  templateUrl: './borrower-card.component.html',
  styleUrls: ['./borrower-card.component.css']
})
export class BorrowerCardComponent implements OnInit {

  @Input('renderBorrower') renderBorrower:RenderModel;
  constructor() { }

  ngOnInit(): void {
  }

}
