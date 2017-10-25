import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component"
import { UpdateComponent } from "./update/update.component"

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'create', component: DashboardComponent },
  // { path: 'logout', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
