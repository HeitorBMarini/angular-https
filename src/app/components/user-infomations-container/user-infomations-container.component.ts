import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { GeneralInformationsComponent } from "../general-informations/general-informations.component";
import { ContactInformationsComponent } from "../contact-informations/contact-informations.component";
import { DependentsListComponent } from "../dependents-list/dependents-list.component";
import { GeneralInformationsEditComponent } from "../general-informations-edit/general-informations-edit.component";
import { ContactInformationsEditComponent } from "../contact-informations-edit/contact-informations-edit.component";

@Component({
  selector: 'app-user-infomations-container',
  imports: [CommonModule, MatTabsModule, GeneralInformationsComponent, ContactInformationsComponent, DependentsListComponent, GeneralInformationsEditComponent, ContactInformationsEditComponent],
  templateUrl: './user-infomations-container.component.html',
  styleUrl: './user-infomations-container.component.css'
})
export class UserInfomationsContainerComponent implements OnChanges{

  currentTabIndex: number = 0;

    @Input({required: true }) isInEditMode: boolean = false;
  @Input({required: true }) userSelected: IUser = {} as IUser;

    ngOnChanges(_: SimpleChanges) {
      this.currentTabIndex = 0;
  }
}
