import { APIResponse, Game } from './../../services/model';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
sort: string| undefined;
public games: Array<Game> | undefined;



constructor(
  private httpService: HttpService, 
  private activatedRoute: ActivatedRoute
){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params["game-search"]) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }   
  searchGames(sort: string, search?:string): void {
    this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) =>{
        this.games = gameList.results;
        console.log(gameList);
      });
  }
}
