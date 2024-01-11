import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { GamesComponent } from './games/games.component';
import { ImprovementsComponent } from './improvements/improvements.component';
import { SecretComponent } from './secret/secret.component';

@NgModule({
  declarations: [GamesComponent, ImprovementsComponent, SecretComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [GamesComponent, ImprovementsComponent, SecretComponent]
})
export class PagesModule {}
