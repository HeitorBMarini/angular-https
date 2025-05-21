import { MaritalStatusEnum } from "../enums/marital-status.enum";

export const maritalStatusDescriptionMap: { [key in MaritalStatusEnum]: string } = {
   [MaritalStatusEnum.SINGLE]: 'Solteiro(a)',  
   [MaritalStatusEnum.MARRIED]: 'Casado(a)',
   [MaritalStatusEnum.DIVORCED]: 'Divorciado(a)',
}
export const maritalStatusArray = Object.entries(maritalStatusDescriptionMap).map(
  ([key, description]) => ({
    code: key,
    description
  })
);
