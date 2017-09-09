import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, AfterViewInit {

  result: any;
  players: any;

  constructor(public service: PlayersService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.service.getPlayer().subscribe((data) => {
      console.log(data);
      this.players = JSON.parse(data);
      return JSON.parse(data);
    });
  }
}