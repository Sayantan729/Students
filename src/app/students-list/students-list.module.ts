import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListRoutingModule } from './students-list-routing.module';
import { StudentsListComponent } from './students-list.component';

import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { RecordsComponent } from './records/records.component';
import { RecordRowComponent } from './record-row/record-row.component';



@NgModule({
  declarations: [StudentsListComponent, FormComponent, EditFormComponent, RecordsComponent, RecordRowComponent],
  imports: [
    CommonModule,
    StudentsListRoutingModule,
    
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentsListModule { }
