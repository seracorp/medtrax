import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../ui/layout/layout.component';
import { LoginComponent } from '../ui/screens/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tt', component: LayoutComponent },
  { path: '', component: LoginComponent }
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
