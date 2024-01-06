import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { ImprovementsComponent } from './pages/improvements/improvements.component';
import { SecretComponent } from './pages/secret/secret.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent
  },
  {
    path: 'melhorias',
    component: ImprovementsComponent
  },
  {
    path: 'secreto',
    component: SecretComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
