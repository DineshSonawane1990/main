import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClusterRoutingModule } from './cluster-routing.module';
import { ClusterComponent } from './cluster/cluster.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ClusterComponent
  ],
  imports: [
    CommonModule,
    ClusterRoutingModule,
    NgxPaginationModule
  ]
})
export class ClusterModule { }
