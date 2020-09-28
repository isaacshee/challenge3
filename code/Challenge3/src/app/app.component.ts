import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; //importing title from angular/platform-browser (ref:-> https://angular.io/guide/set-document-title)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Constructor and method below for setting <title> dynamically
  public constructor(private titleService: Title){ }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
