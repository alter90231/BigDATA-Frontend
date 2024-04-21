import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AsusComponent } from './views/asus/asus.component';
import { HpComponent } from './views/hp/hp.component';
import { DellComponent } from './views/dell/dell.component';
import { LenovoComponent } from './views/lenovo/lenovo.component';
import { GigabyteComponent } from './views/gigabyte/gigabyte.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    LoginComponent,
    CarritoComponent,
    CuentaComponent,
    ProductosComponent,
    AsusComponent,
    HpComponent,
    DellComponent,
    LenovoComponent,
    GigabyteComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
