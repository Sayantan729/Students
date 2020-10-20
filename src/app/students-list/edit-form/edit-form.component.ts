import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonValidators } from 'src/app/validators/common.validators';
import { PhoneValidators } from 'src/app/validators/phone.validators';
import { RollNumValidators } from 'src/app/validators/rollNum.validators';
import { StudentNameValidators } from 'src/app/validators/studentName.validators';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  form: FormGroup;
  

  constructor(private dialogRef:MatDialogRef<EditFormComponent>,@Inject(MAT_DIALOG_DATA) private _student) { 
    
  }

  get student()
  {
    return this._student;
  }
  get studentName() {
    return this.form.get('studentName');
  }

  get rollNum() {
    return this.form.get('rollNum');
  }

  get gender() {
    return this.form.get('gender');
  }

  get year() {
    return this.form.get('year');
  }

  get department() {
    return this.form.get('department');
  }

  get phone()
  {
    return this.form.get('phone');
  }

  get address()
  {
    return this.form.get('address');
  }

  

  clearAll() {
    this.form.reset();
  }

  cancel()
  {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      studentName: new FormControl(this.student.name, [
        CommonValidators.fieldRequired,
        StudentNameValidators.checkFormat,
      ]),
      rollNum: new FormControl({value:this.student.roll,disabled:true}, [
        CommonValidators.fieldRequired,
        RollNumValidators.checkFormat,
      ]),
      gender: new FormControl(this.student.sex, [CommonValidators.fieldRequired]),
      department: new FormControl({value:this.student.dept,disabled:true}, [CommonValidators.fieldRequired]),
      year: new FormControl({value:this.student.year,disabled:true}, [CommonValidators.fieldRequired]),
      phone:new FormControl(this.student.phone,[CommonValidators.fieldRequired,PhoneValidators.checkFormat]),
      address:new FormControl(this.student.address,[CommonValidators.fieldRequired])
    });
    console.log(this.student);
    
    

  }

}
