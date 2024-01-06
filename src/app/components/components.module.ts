import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { InfoComponent } from './info/info.component';
import { LockedCardComponent } from './locked-card/locked-card.component';
import { ImprovementComponent } from './improvement/improvement.component';

@NgModule({
  declarations: [
    GameComponent,
    InfoComponent,
    LockedCardComponent,
    ImprovementComponent
  ],
  imports: [CommonModule],
  exports: [
    GameComponent,
    InfoComponent,
    LockedCardComponent,
    ImprovementComponent
  ]
})
export class ComponentsModule {}
