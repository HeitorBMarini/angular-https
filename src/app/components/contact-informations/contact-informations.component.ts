import { Component, Input } from '@angular/core';
import { GeneralInformationsComponent } from "../general-informations/general-informations.component";
import { UserInfoItemComponent } from "../user-info-item/user-info-item.component";
import { PhoneListComponent } from "./components/phone-list/phone-list.component";
import { IUser } from '../../interfaces/user/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-informations',
  imports: [GeneralInformationsComponent, UserInfoItemComponent, PhoneListComponent, CommonModule],
  templateUrl: './contact-informations.component.html',
  styleUrl: './contact-informations.component.css'
})
export class ContactInformationsComponent {
@Input({required: true}) user: IUser  = {} as IUser;; 
}
