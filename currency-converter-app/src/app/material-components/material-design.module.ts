import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialModules = [
  MatSliderModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatToolbarModule
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialDesignModule {}