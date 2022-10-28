import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { DescriptionComponent } from './description/description.component';
import { Description2Component } from './description2/description2.component';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
    PostsComponent,
    Description2Component,
  ],
  imports: [SharedModule],
})
export class HomeModule {}
