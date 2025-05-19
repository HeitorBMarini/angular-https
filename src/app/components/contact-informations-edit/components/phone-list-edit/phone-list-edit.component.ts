import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-phone-list-edit',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './phone-list-edit.component.html',
  styleUrl: './phone-list-edit.component.css'
})
export class PhoneListEditComponent {

}
