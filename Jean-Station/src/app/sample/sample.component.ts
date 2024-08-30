import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  current:Date = new Date();
  message:string = "Hello pankaj how are you"
  price:number = 140;
  name:string = "Niketh"
  sex:string = "male"
}
