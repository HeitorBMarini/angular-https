import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-address-list-edit',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './address-list-edit.component.html',
  styleUrl: './address-list-edit.component.css'
})
export class AddressListEditComponent {

}
