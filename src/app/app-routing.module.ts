import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'gestion', loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule) }, { path: 'gestion', loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
