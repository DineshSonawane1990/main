import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "org", pathMatch: 'full' }, //on empty redirect to org route
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'org', loadChildren: () => import('./components/org/org.module').then(m => m.OrgModule) },
  { path: 'project', loadChildren: () => import('./components/project/project.module').then(m => m.ProjectModule) },
  { path: 'cluster', loadChildren: () => import('./components/cluster/cluster.module').then(m => m.ClusterModule) },
  { path: 'catelogs', loadChildren: () => import('./components/catalogs/catalogs.module').then(m => m.CatalogsModule) },
  { path: '**', redirectTo: "org", pathMatch: 'full' }, // wild route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
