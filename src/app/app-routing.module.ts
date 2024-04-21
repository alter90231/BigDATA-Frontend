import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from './components/menubar/menubar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AsusComponent } from './views/asus/asus.component';
import { HpComponent } from './views/hp/hp.component';
import { DellComponent } from './views/dell/dell.component';
import { LenovoComponent } from './views/lenovo/lenovo.component';
import { GigabyteComponent } from './views/gigabyte/gigabyte.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [


  // NAVEGACION //
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'menubar', component: MenubarComponent },
  { path: 'home', component: HomeComponent },




  // PAGE MARCAS //
  { path: 'asus', component: AsusComponent },
  { path: 'hp', component: HpComponent },
  { path: 'dell', component: DellComponent },
  { path: 'lenovo', component: LenovoComponent },
  { path: 'gigabyte', component: GigabyteComponent },
  { path: '**', component: NotfoundComponent, },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
