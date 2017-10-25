import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component"
import { UpdateComponent } from "./update/update.component"
import { LoginComponent } from "./login/login.component"
import { NewquestionComponent } from "./newquestion/newquestion.component"
import { VoteComponent } from "./vote/vote.component"

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'question/:id/new_answer', component: UpdateComponent },
  { path: 'create', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_question', component: NewquestionComponent },
  { path: 'question/:id', component: VoteComponent },
  // { path: 'logout', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
