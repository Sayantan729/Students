import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentDetailsComponent } from './student-details.component';
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
 

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [StudentDetailsComponent],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    LottieModule.forRoot({player:playerFactory})
  ]
})
export class StudentDetailsModule { }
