import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { InfoComponent } from './info/info.component';
import { LockedCardComponent } from './locked-card/locked-card.component';
import { ImprovementComponent } from './improvement/improvement.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { LucideAngularModule, X } from 'lucide-angular';

@NgModule({
  declarations: [
    GameComponent,
    InfoComponent,
    LockedCardComponent,
    ImprovementComponent,
    NavComponent,
    NotificationComponent
  ],
  imports: [CommonModule, RouterModule, LucideAngularModule.pick({ X })],
  exports: [
    GameComponent,
    InfoComponent,
    LockedCardComponent,
    ImprovementComponent,
    NavComponent,
    NotificationComponent
  ]
})
export class ComponentsModule {}
