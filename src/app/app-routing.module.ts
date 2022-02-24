import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from './post.resolver';

import { NewsResolver } from './news.resolver';

import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'top',
    component: TopComponent,
    resolve: { message: NewsResolver }
  },
  {
    path: 'post/:id',
    component: PostComponent,
    resolve: { newsData: PostResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
