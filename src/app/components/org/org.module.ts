import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgRoutingModule } from './org-routing.module';
import { OrgComponent } from './org/org.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrgComponent
  ],
  imports: [
    CommonModule,
    OrgRoutingModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class OrgModule { }
