import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  x:string;
  title:string = 'sport';

  calcul(a:number,b:number,c:number) {
    return a+b+c;
  }
}
