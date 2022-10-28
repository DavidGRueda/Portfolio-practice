import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { WorkDetailComponent } from '../components/work-detail/work-detail.component';
import { FeatWorksComponent } from './feat-works/feat-works.component';

@NgModule({
  declarations: [FeatWorksComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'works/:id', component: WorkDetailComponent },
    ]),
  ],
  exports: [FeatWorksComponent, BrowserModule, HttpClientModule, RouterModule],
})
export class SharedModule {}
