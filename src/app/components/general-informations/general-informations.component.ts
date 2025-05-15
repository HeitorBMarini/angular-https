import { Component, Input } from '@angular/core';
import { UserInfoItemComponent } from "../user-info-item/user-info-item.component";
import { IUser } from '../../interfaces/user/user.interface';
import { MaritalStatusPipe } from "../../pipes/marital-status.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general-informations',
  imports: [UserInfoItemComponent, MaritalStatusPipe, CommonModule],
  templateUrl: './general-informations.component.html',
  styleUrl: './general-informations.component.css'
})
export class GeneralInformationsComponent {
@Input({required: true}) user: IUser | undefined = {} as IUser;
}
