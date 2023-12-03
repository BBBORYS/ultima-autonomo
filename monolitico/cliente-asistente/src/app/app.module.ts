import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomeComponent } from './components/home/home.component';
import { AreaComponent } from './components/area/area.component';
import { AsistenteComponent } from './components/asistente/asistente.component';
import { MicroservicioComponent } from './components/microservicio/microservicio.component';
import { EditAreaComponent } from './components/edit-area/edit-area.component';
import { EditAsistenteComponent } from './components/edit-asistente/edit-asistente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    AreaComponent,
    AsistenteComponent,
    MicroservicioComponent,
    EditAreaComponent,
    EditAsistenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
