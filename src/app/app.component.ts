import { Component, OnInit } from '@angular/core';

export interface ISounds {
  name: string;
  link: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sounds: ISounds[] = [];
  

  ngOnInit(): void {
    fetch('./assets/data/sounds.json')
      .then((res) => res.json())
      .then((json) => {
        this.sounds = json;
      });
      
  }
}
