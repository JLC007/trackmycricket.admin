import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {

  constructor(public http: Http) { }

  getPlayer(){
    let url = "http://45.58.47.239:3000/api/players";

    return  this.http.get(url)
                .map((response: Response) => response.json())
  }
}
