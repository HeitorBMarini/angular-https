import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-informations-edit',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './contact-informations-edit.component.html',
  styleUrl: './contact-informations-edit.component.css'
})
export class ContactInformationsEditComponent {

}
