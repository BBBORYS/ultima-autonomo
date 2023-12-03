import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MicroservicioComponent } from './components/microservicio/microservicio.component';
import { AreaComponent } from './components/area/area.component';
import { AsistenteComponent } from './components/asistente/asistente.component';
import { EditAreaComponent } from './components/edit-area/edit-area.component';
import { EditAsistenteComponent } from './components/edit-asistente/edit-asistente.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent
  },
  { path: 'micro',
  component: MicroservicioComponent
  },
  { path: 'area',
component: AreaComponent
},
{ path: 'asistente',
component: AsistenteComponent
},
{
  path: 'area/edit/:id',
  component: EditAreaComponent
},
{
  path: 'asistente/edit/:id',
  component: EditAsistenteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
