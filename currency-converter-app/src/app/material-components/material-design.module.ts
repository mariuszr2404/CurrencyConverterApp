import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MaterialModules = [
  MatSliderModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatToolbarModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatTooltipModule,
  MatTabsModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialDesignModule {}