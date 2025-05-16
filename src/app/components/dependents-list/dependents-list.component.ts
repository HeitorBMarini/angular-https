import { Component, Input } from '@angular/core';
import { UserInfoItemComponent } from "../user-info-item/user-info-item.component";
import { CommonModule } from '@angular/common';
import { DependentsList } from '../../types/dependents-list';
import { CpfPipe } from "../../pipes/cpf.pipe";

@Component({
  selector: 'app-dependents-list',
  imports: [UserInfoItemComponent, CommonModule, CpfPipe],
  templateUrl: './dependents-list.component.html',
  styleUrl: './dependents-list.component.css'
})
export class DependentsListComponent {
@Input({ required: true }) dependentsList: DependentsList | undefined = [];
}
