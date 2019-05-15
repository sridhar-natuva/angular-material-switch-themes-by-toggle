import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  version = VERSION;
  constructor(private overlay: OverlayContainer) { }
  toggleTheme(): void {
    if (this.overlay.getContainerElement().classList.contains("dark-theme")) {
      this.overlay.getContainerElement().classList.remove("dark-theme");
      this.overlay.getContainerElement().classList.add("light-theme");
    } else if (this.overlay.getContainerElement().classList.contains("light-theme")) {
      this.overlay.getContainerElement().classList.remove("light-theme");
      this.overlay.getContainerElement().classList.add("dark-theme");
    } else {
      this.overlay.getContainerElement().classList.add("light-theme");
    }
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else if (document.body.classList.contains("light-theme")) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.add("light-theme");
    }
  }
  ngOnInit() {
    // document.body.classList.add("light-dark-theme", "mat-app-background");
    // this.overlay.getContainerElement().classList.add("light-dark-theme");
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */