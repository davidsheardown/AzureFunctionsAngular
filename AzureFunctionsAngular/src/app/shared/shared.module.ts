import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestpipePipe } from './testpipe.pipe';


@NgModule({
  declarations: [
    TestpipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // This is where we can include a shared component across many feature modules
    TestpipePipe
  ]
})
export class SharedModule { }
