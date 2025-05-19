import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PhoneListEditComponent } from "./components/phone-list-edit/phone-list-edit.component";
import { AddressListComponent } from "../contact-informations/components/address-list/address-list.component";
import { AddressListEditComponent } from "./components/address-list-edit/address-list-edit.component";

@Component({
  selector: 'app-contact-informations-edit',
  imports: [MatFormFieldModule, MatInputModule, PhoneListEditComponent, AddressListComponent, AddressListEditComponent],
  templateUrl: './contact-informations-edit.component.html',
  styleUrl: './contact-informations-edit.component.css'
})
export class ContactInformationsEditComponent {

}
