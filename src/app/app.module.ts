import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeModule } from './components/home/home.module';
import { WorksComponent } from './components/works/works.component';
import { SharedModule } from './shared/shared.module';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FooterComponent,
    HeaderComponent,
    WorksComponent,
    WorkDetailComponent,
  ],
  imports: [HomeModule, SharedModule, AppRouting],
  bootstrap: [AppComponent],
})
export class AppModule {}
