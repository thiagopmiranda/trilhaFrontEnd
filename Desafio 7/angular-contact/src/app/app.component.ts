import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  toggle = false;
  responsivity = true;

  ngOnInit(): void {}

  title = 'angular-contact';

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    event.target.innerWidth;
    if (window.screen.width <= 720) {
      this.responsivity = false;
      console.log('atingi o tamanho');
    } else {
      this.responsivity = true;
    }
  }

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  openMenu() {
    this.trigger.openMenu();
  }
}
