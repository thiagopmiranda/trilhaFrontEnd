import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss'],
})
export class TestesPipeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  today: number = Date.now();
  dado: number = 35;
  ticket: number = 0.8465;
}
