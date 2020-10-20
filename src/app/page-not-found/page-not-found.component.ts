import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  options: AnimationOptions;

  constructor() {}

  ngOnInit(): void {
    this.options = { path: 'assets/animations/pagenotfound.json'};
  }

  animationCreated(animationItem:AnimationItem):void
  {
    animationItem.setSpeed(0.5);
  }

}
