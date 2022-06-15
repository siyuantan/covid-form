import { DateTime } from 'luxon';

export class CovidDeclaration {
  public id: number;
  public date_submitted: DateTime; 
  public name: string;
  public temperature: number;
  public has_symptoms: boolean;
  public has_close_contact: boolean;
  
  constructor(id: number, date_submitted: string, name: string, temperature: number, has_symptoms: boolean, has_close_contact: boolean) {
    this.id = id;
    this.date_submitted = DateTime.fromISO(date_submitted);
    this.name = name;
    this.temperature = temperature;
    this.has_symptoms = has_symptoms;
    this.has_close_contact = has_close_contact;
  }

  static toBusinessEntity(objectToBeTranslated: any) {
    return new CovidDeclaration(
      objectToBeTranslated.id,
      objectToBeTranslated.date_submitted,
      objectToBeTranslated.name,
      objectToBeTranslated.temperature,
      objectToBeTranslated.has_symptoms,
      objectToBeTranslated.has_close_contact
    )

  }
}

export interface DeclarationRecordJson {
  id: number;
  date_submitted: string;
  name: string;
  temperature: number;
  has_symptoms: boolean;
  has_close_contact: boolean;
}