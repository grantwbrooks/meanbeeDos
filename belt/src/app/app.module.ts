import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { ApiService } from './api.service';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { UpdateComponent } from './update/update.component'; // <-- Imported

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderByPipe,
    FilterPipe,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
