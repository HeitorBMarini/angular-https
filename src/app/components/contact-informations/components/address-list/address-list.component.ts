import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserInfoItemComponent } from '../../../user-info-item/user-info-item.component';
import { AddressList } from '../../../../types/address-list';
import { CommonModule } from '@angular/common';
import { AddressTypeEnum } from '../../../../enums/address-type.enum';
import { IAddress } from '../../../../interfaces/user/address.interface';
import { addressTypeDescriptionMap } from '../../../../utils/address-type-description-map';
import { IAdressToDisplay } from '../../../../interfaces/address-to-display.interface';


@Component({
  selector: 'app-address-list',
  imports: [UserInfoItemComponent, CommonModule],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css',
})
export class AddressListComponent implements OnChanges {
  adressListToDisplay: any[] = [];

  @Input({ required: true }) userAddressList: AddressList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const ADDRESS_LIST_LOADED = Array.isArray(
      changes['userAddressList'].currentValue
    );

    if (ADDRESS_LIST_LOADED) {
      this.prepareAdressListToDisplay();
    }
  }
  prepareAdressListToDisplay() {
    this.adressListToDisplay = [];

    Object.keys(addressTypeDescriptionMap)
      .map(Number)
      .forEach((addressType: number) => {
        const addressFound = this.userAddressList?.find(
          (userAdress) => userAdress.type === addressType
        );

        this.adressListToDisplay.push(
          this.returnAddressToDisplay(addressFound, addressType)
        );
      });
  }
  returnAddressToDisplay(
    address: IAddress | undefined,
    addressType: number): IAdressToDisplay{
    if (!address) {
      return {
        typeDescription:
          addressTypeDescriptionMap[addressType as AddressTypeEnum],
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '',
        city: '-',
      };
    }

    return {
      typeDescription:
        addressTypeDescriptionMap[addressType as AddressTypeEnum],
      ...address,
    };
  }
}
