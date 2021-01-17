import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { CreateArticleComponent } from './create-article/create-article.component';


@NgModule({
  declarations: [GestionComponent, ListArticlesComponent, DetailsArticleComponent, CreateArticleComponent],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
