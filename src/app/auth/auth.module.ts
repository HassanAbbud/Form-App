import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BasicPageComponent } from '../reactive/pages/basic-page/basic-page.component';
import { DynamicPageComponent } from '../reactive/pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from '../reactive/pages/switches-page/switches-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
