import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule
} from 'angularx-social-login';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, SocialLoginModule],
  providers: [],
})
export class AuthModule {}
