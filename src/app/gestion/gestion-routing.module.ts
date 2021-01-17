import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './create-article/create-article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';

import { GestionComponent } from './gestion.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';

const routes: Routes = [
  { path: '', component: GestionComponent },
  { path: 'create', component: CreateArticleComponent },
  { path: 'detail', component: DetailsArticleComponent },
  { path: 'list', component: ListArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
