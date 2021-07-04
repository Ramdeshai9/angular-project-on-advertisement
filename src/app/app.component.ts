import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myassignment';
  main=true;
  thar=false;
  range=false;
  kia=false;
  output(num:any)
  {
    this.main=false;
    this.range=false;
    this.thar=false;
    this.kia=false;
    if(num ==1)
      {
       this.thar=true;
      }
    else if(num ==2)
    {
      this.range=true;
    }
    else if(num==3)
    {
      this.kia=true;
    }
  }
  mainmethod()
  {
    this.main=true;
    this.range=false;
    this.thar=false;
    this.kia=false;
  }
  
}
