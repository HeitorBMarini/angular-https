import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-dependents-list-edit',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './dependents-list-edit.component.html',
  styleUrl: './dependents-list-edit.component.css'
})
export class DependentsListEditComponent {

}
