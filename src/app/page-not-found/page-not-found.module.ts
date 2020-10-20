import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
 

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    LottieModule.forRoot({player:playerFactory})
  ]
})
export class PageNotFoundModule { }
