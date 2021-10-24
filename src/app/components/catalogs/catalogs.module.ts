import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsComponent } from './catalogs/catalogs.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    CatalogsComponent
  ],
  imports: [
    CommonModule,
    CatalogsRoutingModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class CatalogsModule { }
