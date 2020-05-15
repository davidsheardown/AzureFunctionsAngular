import { Component, OnInit } from '@angular/core';

import { IPerson } from '../shared/interfaces';
import { PeopleService } from './services/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  PeopleTitle: string;
  ErrorMsg: string;
  Success: boolean;
  listOfPeople: IPerson[];
  loadingFlag: boolean = true;


  constructor(private peopleService: PeopleService) { 

    // Just testing a custom pipe.. so the PIPE is imported/exported via the shared module
    // and not directly into say this component - meaning it is shared for any feature modules
    // Check the component HTML and the PIPE itself under the shared folder  
    this.PeopleTitle = 'Hello this is the People Component';
  }

  ngOnInit(): void {

    this.peopleService.getPeople().subscribe({
      next: result => {
        if (result.success) {
          this.ErrorMsg = null;
          this.listOfPeople = result.entities;
          this.loadingFlag = false;
        }
        else {
          this.ErrorMsg = result.errorMessage;
        }
      },
      error: err => this.ErrorMsg = err
    });
  }


  onPersonSelect(person: IPerson): void {
    alert(person.name);
  }

}
