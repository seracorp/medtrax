import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './screens/login/login.component';

import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  imports: [CommonModule, ClarityModule, AppRoutingModule]
})
export class UiModule {}
