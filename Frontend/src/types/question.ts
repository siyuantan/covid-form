export class Question {
  public index: number;
  public text: string;
  public expectedResponseType: ResponseType;
  
  constructor(number: number, text: string, expectedResponseType: ResponseType)  {
    this.index = number;
    this.text = text;
    this.expectedResponseType = expectedResponseType;
  }
}

export enum ResponseType {
  TrueOrFalse = 0,
  OpenEnded = 1
}