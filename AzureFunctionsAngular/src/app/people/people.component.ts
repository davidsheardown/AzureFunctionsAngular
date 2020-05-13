import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  PeopleTitle: string;

  constructor() { 

    // Just testing a custom pipe.. so the PIPE is imported/exported via the shared module
    // and not directly into say this component - meaning it is shared for any feature modules
    // Check the component HTML and the PIPE itself under the shared folder  
    this.PeopleTitle = 'Hello this is the People Component';
  }

  ngOnInit(): void {
  }

}
