import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GridsComponent } from './grids/grids.component';
import { FormComponent } from './form/form.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'grids', pathMatch: 'full'},
  {path: 'charts', component: ChartsComponent},
  {path: 'grids', component: GridsComponent},
  {path: 'form', component: FormComponent}
];


@NgModule({
  declarations: [AppComponent, ChartsComponent, GridsComponent, FormComponent],
  imports: [
    ReactiveFormsModule,
    NgxChartsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSidenavModule, BrowserModule,
    HttpClientModule, MatMenuModule,
    MatListModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
