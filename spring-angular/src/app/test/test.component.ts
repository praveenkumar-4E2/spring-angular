import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public name="praveen";
  constructor() { }

  ngOnInit(): void {
  }
  
 
  
  public id="teztId";

}
