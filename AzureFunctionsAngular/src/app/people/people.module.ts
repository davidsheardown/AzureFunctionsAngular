import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'people', component: PeopleComponent}
    ])
  ]
})
export class PeopleModule { }
