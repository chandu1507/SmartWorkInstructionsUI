import { AuthGuard } from './helpers/auth.guard';
import { SecretComponent } from './secret/secret.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateInstructionComponent } from './Instructions/create-instruction/create-instruction.component';

const routes: Routes = [
 { path: '',
 component: LoginPageComponent,
 //canActivate: [AuthGuard],
},
{
  path: 'login',
  component: LoginPageComponent,
},
{
  path: 'register',
  component: RegisterPageComponent,
},
{
  path: 'home',
  component: HomePageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'instructions/create',
  component: CreateInstructionComponent,
  canActivate: [AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
