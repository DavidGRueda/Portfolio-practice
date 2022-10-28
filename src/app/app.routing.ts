import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'works', component: WorksComponent },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./components/home/home.module').then((m) => m.HomeModule),
  // },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
export const AppRouting = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy',
});
