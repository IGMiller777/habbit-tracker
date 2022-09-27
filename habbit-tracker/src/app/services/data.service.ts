import { Injectable } from '@angular/core';
import {IHabit} from "../components/habit";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {


    habits: IHabit[] = [
      <IHabit>{
        name: '15 Minute Walk',
        frequency: 'Daily',
        description:
          'This habit makes my kitchen look nice and makes my day better the next morning.',
      },
      <IHabit>{
        name: 'Weed the Garden',
        frequency: 'Weekly',
        description:
          'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.',
      },
    ];
}
