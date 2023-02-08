import {HasFormatter} from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    
    constructor(
      readonly receipient: string, 
      private details: string, 
      public amount: number,
    ){}
  
    format() {
      return `${this.receipient} owed £${this.amount} for ${this.details}`;
    }
  }