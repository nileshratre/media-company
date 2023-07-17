import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from 'src/app/helpers';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'gallery',
        canActivate:[AuthGuard],
        loadChildren: () => import('../../modules/gallery/gallery.module').then(m => m.GalleryModule),
      },
      {
        path: 'about-us',
        loadChildren: () => import('../../modules/about-us/about-us.module').then(m => m.AboutUsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
