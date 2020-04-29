import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MomentDateModule} from '@angular/material-moment-adapter'

import * as moment from 'moment';;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  
})
export class AppComponent {
  title = 'Client';
  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    optradio:[''],
    dateValue:['']
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm);
    alert(this.profileForm.value.firstName);
    alert(this.profileForm.value.lastName);
    alert(this.profileForm.value.optradio);
    alert(this.profileForm.value.dateValue);
    var date=moment(this.profileForm.value.dateValue, 'MM/DD/YYYY', true).format()
   console.log(date);
   alert(date);
  }

}
