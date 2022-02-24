import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {
  constructor(private newsService: NewsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.newsService.getPost(route.paramMap.get('id')!);
  }
}
