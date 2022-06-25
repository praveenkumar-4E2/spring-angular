import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
  
  }
  onSubmit(data: any)
  {
    this.apiservice.saveProduct(data).subscribe((result)=>
    {
      console.log(result);
    })
    
  }
 
 
  
  
}
