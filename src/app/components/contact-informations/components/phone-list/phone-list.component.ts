import { Component, Input } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { UserInfoItemComponent } from "../../../user-info-item/user-info-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css',
  imports: [UserInfoItemComponent, CommonModule]
})
export class PhoneListComponent {
@Input({required: true}) userPhoneList: PhoneList = [];
}
