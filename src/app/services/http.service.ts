import { Game, APIResponse } from './model';
import { environment as env} from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string
  ):Observable<APIResponse<Game>>{
    let params= new HttpParams().set('ordering', ordering);
    if (search){
      params= new HttpParams().set('ordering', ordering).set('search', search);
    }
    let result= this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params:params
    });
    console.log(result);
    return result;
  }
}
