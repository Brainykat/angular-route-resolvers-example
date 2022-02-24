import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NewsService } from './news.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// export class NewsResolver implements Resolve<boolean> {
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     return of(true);
//   }
// }
export class NewsResolver implements Resolve<any> {
  
  constructor(private router: Router,private newsService: NewsService) {}
  resolve(): Observable<any> {
    //return of('Thuku Route!').pipe(delay(2000));
    //return this.newsService.getTopPosts();
    return this.newsService.getTopPosts().pipe(catchError(() => {
      return of('data not available at this time');
    }));
    // return this.newsService.getTopPosts().pipe(catchError(() => {
    //   this.router.navigate(['/']);
    //   return EMPTY;
    // }));
  }
}
