import { Component } from '@angular/core';
import { GeneralInformationsComponent } from "../general-informations/general-informations.component";
import { UserInfoItemComponent } from "../user-info-item/user-info-item.component";

@Component({
  selector: 'app-contact-informations',
  imports: [GeneralInformationsComponent, UserInfoItemComponent],
  templateUrl: './contact-informations.component.html',
  styleUrl: './contact-informations.component.css'
})
export class ContactInformationsComponent {

}
