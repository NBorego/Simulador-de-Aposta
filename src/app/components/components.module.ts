import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { InfoComponent } from './info/info.component';
import { LockedCardComponent } from './locked-card/locked-card.component';
import { ImprovementComponent } from './improvement/improvement.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GameComponent,
    InfoComponent,
    LockedCardComponent,
    ImprovementComponent,
    NavComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    GameComponent,
    InfoComponent,
    LockedCardComponent,
    ImprovementComponent,
    NavComponent
  ]
})
export class ComponentsModule {}
