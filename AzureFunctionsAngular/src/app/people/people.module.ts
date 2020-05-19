import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleDetailGuard } from './guards/people-detail.guard';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'people', component: PeopleComponent},
      {path: 'people/:id', canActivate: [PeopleDetailGuard], component: PeopleDetailComponent}
    ])
  ]
})
export class PeopleModule { }
