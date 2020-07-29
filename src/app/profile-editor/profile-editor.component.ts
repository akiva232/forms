import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators,FormArray  } from '@angular/forms';

// FormBuilder חוסך בשביל לא לכתוב את כל הפרום גרןפ/קונטרול
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
// צורה רגילה מופעים
// profileForm= new FormGroup ({
//   firstName: new FormControl(''),
//   lastName: new FormControl(''),
//   // FormGroup  אפשר להכניס עוד קבוצה של 
//   address:new FormGroup({
//     street:new FormControl(''),
//     city:new FormControl(''),
//     state:new FormControl(''),
//     zip:new FormControl(''),
//   })

//  (בניית פרופילים) חוסך זמן
profileForm = this.fb.group({
  // זה נקרא ולידטור יכולת הגבלה וטופס נכון
  firstName: ['',Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
  // // FormArray מופעים של קבוצות
  // aliases:this.fb.array([
  //   this.fb.control('')
  // ])
})

  constructor(private fb:  FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }

  //   איפוס ערך תיקון או עידכון
  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Nancy',
      address:{
        street:'123 Drew Street'
      }
      
    });
  // }
  // // הפונקציה של מופעים בקבוצות
  // get aliases(){
  //   return this.profileForm.get(' aliases') as FormArray;
  // }
  // // להכניס למערך שבנינו במופע
  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }
}}
