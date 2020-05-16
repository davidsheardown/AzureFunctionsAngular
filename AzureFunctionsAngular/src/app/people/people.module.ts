import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PeopleDetailComponent } from './people-detail/people-detail.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'people', component: PeopleComponent},
      {path: 'people/:id', component: PeopleDetailComponent}
    ])
  ]
})
export class PeopleModule { }
