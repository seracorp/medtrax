import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './screens/login/login.component';

import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  imports: [CommonModule, ClarityModule]
})
export class UiModule {}
